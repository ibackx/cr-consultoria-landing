import 'dotenv/config'
import express from 'express'
import open from 'open'
import { google } from 'googleapis'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env before running this script.')
  process.exit(1)
}

const REDIRECT_URI = 'http://localhost:5555/callback'

async function main() {
  const app = express()
  const server = app.listen(5555, () => {
    console.log('[oauth] Listening on http://localhost:5555')
  })

  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  )

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar'],
    prompt: 'consent',
  })

  app.get('/callback', async (req, res) => {
    const code = req.query.code
    if (!code) {
      res.status(400).send('Missing code')
      return
    }
    try {
      const { tokens } = await oauth2Client.getToken(code)
      console.log('\n[oauth] Tokens received:')
      console.log(JSON.stringify(tokens, null, 2))
      res.send('Tokens received. You can close this window.')
    } catch (e) {
      console.error('[oauth] Error exchanging code', e)
      res.status(500).send('Error exchanging code')
    } finally {
      setTimeout(() => server.close(() => process.exit(0)), 500)
    }
  })

  console.log('\nOpen the following URL to authorize access:')
  console.log(authUrl)
  try {
    await open(authUrl)
  } catch {
    // ignore; user can copy the URL
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
