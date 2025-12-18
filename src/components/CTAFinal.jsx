import React from 'react'
import styles from '../styles/CTAFinal.module.css'

export default function CTAFinal() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <h2>Pronto para acelerar seus resultados?</h2>
        <p>Agende uma conversa e descubra como a IA pode impulsionar seu negócio.</p>
        <a href="#contato" className={styles.cta}>Agendar uma conversa</a>
      </div>
    </section>
  )
}
