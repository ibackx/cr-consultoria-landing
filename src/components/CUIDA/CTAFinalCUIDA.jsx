import React from 'react'
import styles from '../../styles/CUIDA.module.css'

export default function CTAFinalCUIDA({ onCTA }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>Avance com responsabilidade e impacto</h2>
        <p>Converse com nossa equipe técnica e avalie um projeto piloto alinhado às necessidades da sua instituição.</p>
        <div className={styles.actions}>
          <button className={styles.ctaPrimary} onClick={onCTA}>Agendar conversa técnica</button>
          <button className={styles.ctaSecondary} onClick={onCTA}>Avaliar projeto piloto</button>
        </div>
      </div>
    </section>
  )
}
