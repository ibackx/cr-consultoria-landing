import React from 'react'
import styles from '../styles/Solucoes.module.css'

const cards = [
  {
    title: 'Consultoria em Inteligência Artificial',
    desc: 'Diagnóstico, estratégia e roadmap para adoção de IA com foco em ROI.'
  },
  {
    title: 'Automação de Processos',
    desc: 'Automatização de tarefas e integrações para ganho de eficiência operacional.'
  },
  {
    title: 'Inteligência de Dados e Dashboards',
    desc: 'Estruturação de dados, KPIs e painéis para tomada de decisão.'
  },
  {
    title: 'Agentes de IA para Atendimento e Vendas',
    desc: 'Assistentes inteligentes para qualificação de leads e suporte ao cliente.'
  }
]

export default function Solucoes() {
  return (
    <section id="solucoes" className={styles.section}>
      <div className={styles.container}>
        <h2>Soluções</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
