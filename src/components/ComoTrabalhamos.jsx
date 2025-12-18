import React from 'react'
import styles from '../styles/ComoTrabalhamos.module.css'

const steps = [
  { step: 'Diagnóstico', desc: 'Entendemos objetivos, contexto e oportunidades.' },
  { step: 'Proposta', desc: 'Desenhamos a solução e o plano de ação.' },
  { step: 'Implementação', desc: 'Executamos com rapidez e qualidade.' },
  { step: 'Acompanhamento', desc: 'Medimos, otimizamos e sustentamos resultados.' }
]

export default function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className={styles.section}>
      <div className={styles.container}>
        <h2>Como Trabalhamos</h2>
        <ol className={styles.timeline}>
          {steps.map((s) => (
            <li key={s.step} className={styles.item}>
              <h3>{s.step}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
