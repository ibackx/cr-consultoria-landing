import { GOOGLE_API_KEY, GOOGLE_CALENDAR_ID } from '../config/calendar'

function toISO(date) {
  return new Date(date).toISOString()
}

function startOfDayLocal(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

function endOfDayLocal(date) {
  const d = new Date(date)
  d.setHours(23, 59, 59, 999)
  return d
}

export async function fetchDayBusy(dateObj) {
  if (!GOOGLE_API_KEY || !GOOGLE_CALENDAR_ID) {
    return { busy: [], source: 'local' }
  }
  const timeMin = toISO(startOfDayLocal(dateObj))
  const timeMax = toISO(endOfDayLocal(dateObj))

  const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events`)
  url.searchParams.set('key', GOOGLE_API_KEY)
  url.searchParams.set('timeMin', timeMin)
  url.searchParams.set('timeMax', timeMax)
  url.searchParams.set('singleEvents', 'true')
  url.searchParams.set('orderBy', 'startTime')
  url.searchParams.set('showDeleted', 'false')
  url.searchParams.set('maxResults', '250')

  const res = await fetch(url.toString())
  if (!res.ok) {
    // fail soft; no remote busy data
    return { busy: [], source: 'error', status: res.status }
  }
  const data = await res.json()
  const busy = (data.items || []).map(ev => {
    const start = ev.start?.dateTime || ev.start?.date
    const end = ev.end?.dateTime || ev.end?.date
    return {
      start: new Date(start),
      end: new Date(end),
      id: ev.id,
      summary: ev.summary,
    }
  })
  return { busy, source: 'google' }
}

export function slotOverlaps(slot, event) {
  return slot.start < event.end && slot.end > event.start
}
