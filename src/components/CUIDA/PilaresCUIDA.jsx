import React from 'react'
import styles from '../../styles/CUIDA.Light.module.css'

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 6h16M6 10h12M8 14h8M10 18h4"/></svg>
    ),
    title: 'Contato contínuo',
    sub: 'Acompanhamento ativo do paciente',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M5 12h14"/></svg>
    ),
    title: 'Identificação de risco',
    sub: 'Sinais de alerta e abandono',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M6 7l5 5-5 5"/><path d="M13 7l5 5-5 5"/></svg>
    ),
    title: 'Ação humana oportuna',
    sub: 'Equipe decide e intervém',
  },
]

export default function PilaresCUIDA() {
  return (
    <section id="cuida-pilares" className={styles.pillars}>
      <div className={styles.container}>
        <div className={styles.pillarsGrid}>
          {items.map((it, idx) => (
            <article className={styles.pillar} key={idx}>
              <div className={styles.pillarIcon}>{it.icon}</div>
              <div className={styles.pillarText}>{it.title}</div>
              <div className={styles.pillarSub}>{it.sub}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
