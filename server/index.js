import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { google } from 'googleapis'

const PORT = process.env.PORT || 8787

// Required env vars (do NOT expose these on the client):
// GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_OAUTH_REFRESH_TOKEN, GOOGLE_CALENDAR_ID
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_OAUTH_REFRESH_TOKEN,
  GOOGLE_CALENDAR_ID,
} = process.env

// Default to the authenticated user's primary calendar when not provided
const CALENDAR_ID = GOOGLE_CALENDAR_ID || 'primary'
if (!GOOGLE_CALENDAR_ID) {
  console.warn('[server] GOOGLE_CALENDAR_ID not set. Using "primary" calendar.')
}

const app = express()
app.use(cors())
app.use(express.json())

function getCalendarClient() {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
    throw new Error('Missing Google OAuth credentials (GOOGLE_CLIENT_ID/SECRET/REFRESH_TOKEN).')
  }
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    // Redirect is not used here since we rely on an existing refresh token
    'http://localhost'
  )
  oauth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN })
  return google.calendar({ version: 'v3', auth: oauth2Client })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Free/busy for a day using OAuth (supports private calendars)
app.get('/api/day-busy', async (req, res) => {
  try {
    const timeMin = req.query.timeMin || new Date().toISOString()
    const timeMax = req.query.timeMax || new Date(Date.now() + 24*60*60*1000).toISOString()
    const calendar = getCalendarClient()
    const fb = await calendar.freebusy.query({
      requestBody: {
        timeMin: new Date(timeMin).toISOString(),
        timeMax: new Date(timeMax).toISOString(),
        items: [{ id: CALENDAR_ID }],
      }
    })
    const busy = fb.data.calendars?.[CALENDAR_ID]?.busy || []
    return res.json({ ok: true, busy })
  } catch (err) {
    const googleErr = err?.response?.data
    console.error('[day-busy] error', googleErr || err?.message || err)
    return res.status(500).json({ error: 'Failed to fetch busy', detail: err?.message, google: googleErr })
  }
})

app.post('/api/schedule', async (req, res) => {
  try {
    const { start, end, name, email, notes } = req.body || {}
    if (!start || !end) {
      return res.status(400).json({ error: 'Missing start/end' })
    }

    const calendar = getCalendarClient()

    // RFC3339 timestamps; accept ISO from client
    const event = {
      summary: 'Consulta CR Consultoria (30 min)',
      description: [
        'Agendado via site.',
        name ? `Nome: ${name}` : null,
        email ? `Email: ${email}` : null,
        notes ? `Notas: ${notes}` : null,
      ].filter(Boolean).join('\n'),
      start: { dateTime: new Date(start).toISOString() },
      end: { dateTime: new Date(end).toISOString() },
      attendees: email ? [{ email }] : [],
      reminders: { useDefault: true },
      conferenceData: undefined,
      visibility: 'default',
      guestsCanInviteOthers: true,
      guestsCanModify: false,
      guestsCanSeeOtherGuests: true,
    }

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: event,
      sendUpdates: 'all', // email invites to attendees
    })

    return res.json({ ok: true, eventId: response.data.id, htmlLink: response.data.htmlLink })
  } catch (err) {
    const googleErr = err?.response?.data
    console.error('[schedule] error', googleErr || err?.message || err)
    return res.status(500).json({ error: 'Failed to create event', detail: err?.message, google: googleErr })
  }
})

app.listen(PORT, () => {
  console.log(`[server] Listening on http://localhost:${PORT}`)
})
