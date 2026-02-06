import React from 'react'
import styles from '../../styles/CUIDA.module.css'

export default function HeroCUIDA({ onPrimary, onSecondary }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>CUIDA — Saúde Inteligente para Acompanhamento Clínico</h1>
        <p className={styles.subtitle}>Tecnologia aplicada para apoiar equipes de saúde e reconectar pacientes ao cuidado contínuo, com ética, transparência e impacto real.</p>
        <div className={styles.actions}>
          <button className={styles.ctaPrimary} onClick={onPrimary}>Falar com um especialista</button>
          <button className={styles.ctaSecondary} onClick={onSecondary}>Solicitar apresentação</button>
        </div>
      </div>
    </section>
  )
}
