import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/SchedulerModal.module.css'
import { fetchDayBusy, slotOverlaps } from '../lib/calendarAvailability'
import { DISABLE_WEEKENDS } from '../config/calendar'
import { createBooking } from '../lib/api'

function addMinutes(date, minutes) {
  const d = new Date(date)
  d.setMinutes(d.getMinutes() + minutes)
  return d
}

function toDateInputValue(date) {
  const off = date.getTimezoneOffset()
  const d = new Date(date.getTime() - off * 60 * 1000)
  return d.toISOString().split('T')[0]
}

function fmtTime(d) {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function toGCalDateStr(date) {
  // YYYYMMDDTHHMMSSZ in UTC
  const iso = new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  return iso
}

const BUSINESS_START = 8
const BUSINESS_END = 18
const LUNCH_START = 12
const LUNCH_END = 13
const SLOT_MINUTES = 30

function buildDailySlots(baseDate) {
  const slots = []
  const d = new Date(baseDate)
  d.setSeconds(0, 0)
  d.setHours(BUSINESS_START, 0, 0, 0)

  const isWeekend = [0,6].includes(new Date(baseDate).getDay())
  if (DISABLE_WEEKENDS && isWeekend) return []

  while (d.getHours() < BUSINESS_END || (d.getHours() === BUSINESS_END && d.getMinutes() === 0)) {
    const hour = d.getHours()
    if (!(hour >= LUNCH_START && hour < LUNCH_END)) {
      const start = new Date(d)
      const end = addMinutes(start, SLOT_MINUTES)
      if (end.getHours() > BUSINESS_END || (end.getHours() === BUSINESS_END && end.getMinutes() > 0)) {
        break
      }
      slots.push({ start, end })
    }
    d.setMinutes(d.getMinutes() + SLOT_MINUTES)
  }
  return slots
}

// Local booked storage removed: rely on real calendar busy via backend

export default function SchedulerModal({ isOpen, onClose }) {
  const [dateStr, setDateStr] = useState(() => toDateInputValue(new Date()))
  const [loading, setLoading] = useState(false)
  // Removed local booked map
  const [remoteBusy, setRemoteBusy] = useState([])
  const [selected, setSelected] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitOk, setSubmitOk] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const closeBtnRef = useRef(null)

  const dateObj = useMemo(() => {
    const d = new Date(dateStr + 'T00:00:00')
    return d
  }, [dateStr])

  const now = new Date()

  const slots = useMemo(() => {
    const all = buildDailySlots(dateObj)
    const filtered = all
      .filter(s => {
        // Hide past slots if date is today
        if (dateObj.toDateString() === now.toDateString()) {
          return s.start > now
        }
        return true
      })
    const withRemote = filtered.map(s => ({
        ...s,
        key: s.start.toISOString(),
        available: !remoteBusy.some(ev => slotOverlaps(s, ev)),
      }))
    return withRemote
  }, [dateObj, now, remoteBusy])

  useEffect(() => {
    if (!isOpen) return

    // Prevent background scroll
    const { style } = document.body
    const prev = style.overflow
    style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)

    // Focus management
    setTimeout(() => closeBtnRef.current?.focus(), 0)

    return () => {
      style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    setLoading(true)
    // remote Google Calendar busy
    let cancelled = false
    ;(async () => {
      try {
        const { busy } = await fetchDayBusy(dateObj)
        if (!cancelled) setRemoteBusy(busy)
      } catch {
        if (!cancelled) setRemoteBusy([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [isOpen, dateObj])

  function bookSlot(slot) {
    setSelected(slot)
    setSubmitOk(false)
    setSubmitError('')
  }

  function downloadICS(slot) {
    const startUtc = slot.start
    const endUtc = slot.end
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//CR Consultoria//Agendamento//PT-BR',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${slot.start.toISOString()}@cr-consultoria`,
      `DTSTAMP:${toGCalDateStr(new Date())}`,
      `DTSTART:${toGCalDateStr(startUtc)}`,
      `DTEND:${toGCalDateStr(endUtc)}`,
      'SUMMARY:Consulta CR Consultoria (30 min)',
      'DESCRIPTION:Agendamento gerado pelo site. Caso precise alterar, responda nosso e-mail de confirmação.',
      'LOCATION:Online',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'agendamento.ics'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  function gCalLink(slot) {
    const start = toGCalDateStr(slot.start)
    const end = toGCalDateStr(slot.end)
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Consulta CR Consultoria (30 min)',
      dates: `${start}/${end}`,
      details: 'Agendado via site. Caso precise remarcar, entre em contato.',
      location: 'Online',
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="sched-title">
        <div className={styles.header}>
          <h3 id="sched-title">Agendar uma conversa</h3>
          <button ref={closeBtnRef} className={styles.iconBtn} onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        {!selected && (
          <>
            <div className={styles.controls}>
              <label>
                Data
                <input type="date" value={dateStr} onChange={(e) => setDateStr(e.target.value)} min={toDateInputValue(new Date())} />
              </label>
              <div className={styles.note}>Duração: 30 min · Horário: 08:00–18:00 (12:00–13:00 indisponível)</div>
              {DISABLE_WEEKENDS && <div className={styles.note}>Observação: Fins de semana desabilitados</div>}
            </div>

            {loading ? (
              <div className={styles.loading}>Verificando disponibilidade…</div>
            ) : (
              <div className={styles.grid}>
                {slots.length === 0 && (
                  <div className={styles.empty}>Sem horários disponíveis nesta data.</div>
                )}
                {slots.map(slot => (
                  <button
                    key={slot.key}
                    className={styles.slot}
                    disabled={!slot.available}
                    onClick={() => bookSlot(slot)}
                    aria-label={slot.available ? `Agendar ${fmtTime(slot.start)}` : `Indisponível ${fmtTime(slot.start)}`}
                  >
                    <span>{fmtTime(slot.start)}</span>
                    {!slot.available && <span className={styles.badge}>Indisponível</span>}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {selected && (
          <div className={styles.confirm}>
            <h4>Consulta agendada!</h4>
            <p>{dateObj.toLocaleDateString()} · {fmtTime(selected.start)} – {fmtTime(selected.end)}</p>
              <div className={styles.form}>
              <p>Opcional: informe seu email para enviarmos o convite e registrar em nosso calendário automaticamente.</p>
              <div className={styles.formRow}>
                <label>
                  Nome
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Email
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@exemplo.com" />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  Observações
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Assunto, preferências, etc." />
                </label>
              </div>
              <div className={styles.actions}>
                <button
                  disabled={submitting}
                  className={styles.primary}
                  onClick={async () => {
                    try {
                      setSubmitting(true)
                      await createBooking({
                        start: selected.start.toISOString(),
                        end: selected.end.toISOString(),
                        name, email, notes,
                      })
                      setSubmitOk(true)
                      setSubmitError('')
                      onClose?.() // auto close on success
                    } catch (e) {
                      setSubmitError('Falha ao registrar no calendário da CR. Tente novamente em alguns instantes.')
                    } finally {
                      setSubmitting(false)
                    }
                  }}
                >{submitting ? 'Enviando…' : 'Enviar convite e notificar CR'}</button>
                <button className={styles.ghost} onClick={onClose}>Fechar</button>
              </div>
              {submitOk && (
                <div className={styles.note} aria-live="polite">Convite enviado e reunião registrada no calendário da CR.</div>
              )}
              {submitError && (
                <div className={styles.error} role="alert">{submitError}</div>
              )}
            </div>
          </div>
        )}

        <div className={styles.footerTZ}>
          Fuso horário: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
      </div>
    </div>
  )
}
