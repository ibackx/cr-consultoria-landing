// Configure your Google Calendar access (Vite environment)
// Use import.meta.env for client-side builds in Vite.
// If the calendar is PUBLIC (readable), set API key + calendar ID.
// For PRIVATE calendars, we can switch to OAuth GIS flow on request.

const env = typeof import.meta !== 'undefined' ? import.meta.env : {}
export const GOOGLE_API_KEY = env.VITE_GOOGLE_API_KEY ?? ''
export const GOOGLE_CALENDAR_ID = env.VITE_GOOGLE_CALENDAR_ID ?? ''

// Optional: restrict offered days (e.g., skip weekends)
export const DISABLE_WEEKENDS = false
