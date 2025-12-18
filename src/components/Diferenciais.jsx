import React from 'react'
import styles from '../styles/Diferenciais.module.css'

const items = [
  { title: 'Foco em resultado', desc: 'Priorizamos iniciativas com impacto direto no negócio.' },
  { title: 'Soluções sob medida', desc: 'Cada projeto é desenhado para sua realidade.' },
  { title: 'Integração com sistemas existentes', desc: 'Construímos sobre o que você já usa.' },
  { title: 'Experiência em projetos reais', desc: 'Aprendizado prático e comprovado em múltiplos setores.' }
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className={styles.section}>
      <div className={styles.container}>
        <h2>Diferenciais</h2>
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.title} className={styles.item}>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
