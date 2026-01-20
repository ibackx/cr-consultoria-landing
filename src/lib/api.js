export const API_BASE = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) || '/api'

export async function createBooking(payload) {
  const res = await fetch(`${API_BASE}/schedule`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(t || 'Falha ao criar o evento')
  }
  return res.json()
}
