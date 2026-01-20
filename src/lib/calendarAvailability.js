import { API_BASE } from './api'

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
  const timeMin = toISO(startOfDayLocal(dateObj))
  const timeMax = toISO(endOfDayLocal(dateObj))

  // Always use backend OAuth to support private calendars and avoid 404s
  try {
    const url = new URL(`${API_BASE}/day-busy`, window.location.origin)
    url.searchParams.set('timeMin', timeMin)
    url.searchParams.set('timeMax', timeMax)
    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('backend busy failed')
    const data = await res.json()
    const busy = (data.busy || []).map(b => ({ start: new Date(b.start), end: new Date(b.end) }))
    return { busy, source: 'backend' }
  } catch {
    return { busy: [], source: 'local' }
  }
}

export function slotOverlaps(slot, event) {
  return slot.start < event.end && slot.end > event.start
}
