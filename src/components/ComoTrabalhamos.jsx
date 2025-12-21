import React from 'react'
import styles from '../styles/ComoTrabalhamos.module.css'

const steps = [
  { step: 'Diagnóstico', desc: 'Entendemos seus objetivos, contexto e restrições para identificar oportunidades reais de impacto.' },
  { step: 'Proposta', desc: 'Definimos uma solução clara, com escopo, prioridades e próximos passos bem definidos.' },
  { step: 'Implementação', desc: 'Executamos com agilidade, qualidade e comunicação constante ao longo do projeto.' },
  { step: 'Acompanhamento', desc: 'Monitoramos resultados, ajustamos quando necessário e mantemos visibilidade total do andamento.' }
]

export default function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className={styles.section}>
      <div className={styles.container}>
        <h2 className="gradientText">Como Trabalhamos</h2>
        <ol className={styles.timeline}>
          {steps.map((s, i) => (
            <li key={s.step} className={styles.item}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.step}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
