import React from 'react'
import styles from '../styles/Diferenciais.module.css'

// Ícones lineares simples (SVG inline, sem ilustração pesada)
function Icon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  switch (name) {
    case 'alvo':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M21 12h-3M12 21v-3M3 12h3" />
        </svg>
      )
    case 'camadas':
      return (
        <svg {...common}>
          <path d="M12 3l7 4-7 4-7-4 7-4z" />
          <path d="M5 12l7 4 7-4" />
          <path d="M5 16l7 4 7-4" />
        </svg>
      )
    case 'link':
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10 5" />
          <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L14 19" />
        </svg>
      )
    case 'checklist':
      return (
        <svg {...common}>
          <path d="M9 6h10" />
          <path d="M9 12h10" />
          <path d="M9 18h10" />
          <path d="M4 6l1.5 1.5L7 6" />
          <path d="M4 12l1.5 1.5L7 12" />
          <path d="M4 18l1.5 1.5L7 18" />
        </svg>
      )
    default:
      return null
  }
}

const items = [
  { title: 'Foco em resultado real', desc: 'Trabalhamos com objetivos claros, métricas definidas e impacto mensurável no negócio.', icon: 'alvo' },
  { title: 'Soluções sob medida', desc: 'Nada de pacotes genéricos: cada solução é construída a partir do seu contexto, dados e objetivos.', icon: 'camadas' },
  { title: 'Integração com sistemas existentes', desc: 'Aproveitamos o que você já utiliza para evitar retrabalho, reduzir custos e acelerar resultados.', icon: 'link' },
  { title: 'Experiência em projetos reais', desc: 'Vivência prática em tecnologia e serviços, com comunicação transparente e acompanhamento contínuo do projeto.', icon: 'checklist' }
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className={styles.section}>
      <div className={styles.container}>
        <h2 className="gradientText">Diferenciais</h2>
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.title} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.itemIcon}><Icon name={it.icon} /></span>
                <h3>{it.title}</h3>
              </div>
              <p>{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
