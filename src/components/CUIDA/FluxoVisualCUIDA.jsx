import React from 'react'
import styles from '../../styles/CUIDA.Light.module.css'

export default function FluxoVisualCUIDA(){
  return (
    <section id="cuida-fluxo" className={styles.flow}>
      <div className={styles.container}>
        {/* grid: step, arrow, step, arrow, step, arrow, step, arrow, step */}
        <div className={styles.flowRow}>
          {/* Inclusão */}
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <circle cx="9" cy="10" r="2"/>
                <path d="M4 16c2.5-2 7.5-2 10 0"/>
              </svg>
            </div>
            <div className={styles.stepLabel}>Inclusão</div>
            <div className={styles.stepSub}>Paciente entra no programa</div>
          </div>
          <div className={styles.flowArrow} />

          {/* Acompanhamento */}
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M4 6h12a3 3 0 0 1 3 3v6a0 0 0 0 1 0 0H7a3 3 0 0 1-3-3V6z"/>
                <path d="M7 14c1.5-2 3-2 4.5 0 1.5-2 3-2 4.5 0"/>
              </svg>
            </div>
            <div className={styles.stepLabel}>Acompanhamento</div>
            <div className={styles.stepSub}>Contato contínuo e estruturado</div>
          </div>
          <div className={styles.flowArrow} />

          {/* Avaliação */}
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24">
                <circle cx="10" cy="10" r="5"/>
                <path d="M14 14l4 4"/>
              </svg>
            </div>
            <div className={styles.stepLabel}>Avaliação</div>
            <div className={styles.stepSub}>Riscos e sinais identificados</div>
          </div>
          <div className={styles.flowArrow} />

          {/* Apoio à decisão */}
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="5" y="4" width="14" height="16" rx="2"/>
                <path d="M8 9h6"/>
                <path d="M8 13h6"/>
                <path d="M8 17h6"/>
                <path d="M6 9l1 1 2-2"/>
              </svg>
            </div>
            <div className={styles.stepLabel}>Apoio à decisão</div>
            <div className={styles.stepSub}>Informação clara para a equipe</div>
          </div>
          <div className={styles.flowArrow} />

          {/* Intervenção */}
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M6 14c2-2 4-2 6 0"/>
                <path d="M4 10c3-3 9-3 12 1"/>
                <path d="M16 12l3 3"/>
                <path d="M18 10l2 2"/>
              </svg>
            </div>
            <div className={styles.stepLabel}>Intervenção</div>
            <div className={styles.stepSub}>Ação humana no momento certo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
