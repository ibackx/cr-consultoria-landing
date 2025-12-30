import React, { useState } from 'react'
import styles from '../styles/CTAFinal.module.css'
import SchedulerModal from './SchedulerModal'

export default function CTAFinal() {
  const [open, setOpen] = useState(false)
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <h2>Pronto para acelerar seus resultados?</h2>
        <p>Agende uma conversa e descubra como a IA pode impulsionar seu negócio.</p>
        <button className={styles.cta} onClick={() => setOpen(true)} style={{ border: 'none', cursor: 'pointer' }}>Agendar uma conversa</button>
      </div>
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}
