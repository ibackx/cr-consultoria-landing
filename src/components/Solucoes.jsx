import React from 'react'
import styles from '../styles/Solucoes.module.css'

const destaques = [
  {
    slug: 'cuida',
    title: 'CUIDA — Saúde Inteligente',
    desc: 'IA aplicada para apoiar equipes médicas e reconectar pacientes ao cuidado contínuo.',
    href: '/CUIDA'
  },
  {
    slug: 'reserveone',
    title: 'ReserveOne — Reservas Omnicanal',
    desc: 'Motor de reservas centralizado com chat próprio, web e backoffice — mais controle, menos erros e mais conversão.',
    href: '/reserveone'
  }
]

const categorias = [
  {
    key: 'automacao-ia',
    title: 'IA e Automação para Negócios',
    desc: 'Agentes e automações que eliminam tarefas operacionais e elevam as pessoas para um papel mais estratégico.',
    href: '/ia-automacao'
  },
  {
    key: 'dados-decisao',
    title: 'Dados, BI e Decisão Inteligente',
    desc: 'Transformamos dados financeiros e operacionais em decisões claras e acionáveis, com dashboards inteligentes e visão em tempo real do negócio.',
    href: '/dados-e-decisao'
  },
  {
    key: 'solucoes-digitais',
    title: 'Soluções Digitais',
    desc: 'Web institucional e e‑commerce prontos para venda e comunicação.',
    href: '/solucoes-digitais'
  }
]

export default function Solucoes() {
  return (
    <section id="solucoes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className="gradientText">Soluções</h2>
        </div>

        {/* Destaques */}
        <div className={styles.blockTitle}>Soluções Estratégicas</div>
        <div className={styles.featured}>
          {destaques.map((s) => (
            <article key={s.slug} className={styles.featureCard}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href={s.href} className={styles.ctaPrimary}>Conhecer solução</a>
            </article>
          ))}
        </div>

        {/* Categorias */}
        <div className={styles.blockTitle}>Outras Soluções</div>
        <div className={styles.categories}>
          {categorias.map((c) => (
            <article key={c.key} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <h3>{c.title}</h3>
                {c.badge && <span className={styles.badge}>{c.badge}</span>}
              </div>
              <p>{c.desc}</p>
              <a href={c.href} className={styles.ctaSecondary}>Ver soluções</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
