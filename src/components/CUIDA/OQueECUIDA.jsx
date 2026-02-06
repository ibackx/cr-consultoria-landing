import React from 'react'
import styles from '../../styles/CUIDA.module.css'
import CuidaBadge from './ui/CuidaBadge.jsx'

export default function OQueECUIDA() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <CuidaBadge />
        <h2>O que é o CUIDA</h2>
        <p className={styles.lead}>CUIDA é um sistema de apoio ao cuidado contínuo. Ele ajuda a reconectar pacientes crônicos às equipes de saúde e mantém o acompanhamento ativo — <span className={styles.highlight}>sempre com supervisão humana</span>.</p>
        <div className={styles.cards3}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="8" cy="8" r="3" />
                <path d="M4 20c0-3 2.5-6 6-6s6 3 6 6" />
                <path d="M16 7l3 3" />
              </svg>
              Não substitui profissionais
            </h3>
            <p>O CUIDA apoia o trabalho clínico; decisões continuam com médicos e equipe de saúde.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="7" />
                <path d="M5 5l14 14" />
              </svg>
              Não realiza diagnósticos
            </h3>
            <p>O sistema não prescreve nem diagnostica; identifica sinais e ajuda a priorizar contatos.</p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 19 6v5c0 5-3 9-7 11-4-2-7-6-7-11V6l7-4" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              Transparente e ético
            </h3>
            <p>Operação com supervisão humana, comunicada ao paciente e alinhada a boas práticas.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
