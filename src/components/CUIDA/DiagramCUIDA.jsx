import React from 'react'
import styles from '../../styles/CUIDA.Light.module.css'

export default function DiagramCUIDA(){
  return (
    <section id="cuida-diagram" className={styles.diagram}>
      <div className={styles.container}>
        <div className={styles.diagramTitle}>Fluxo de cuidado contínuo</div>
        <div className={styles.diagramRow}>
          <div className={styles.node}>
            <div className={styles.nodeIcon}>
              <svg viewBox="0 0 24 24"><path d="M12 21s-7-5-7-10a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 5-7 10-7 10"/></svg>
            </div>
            <div className={styles.nodeLabel}>Paciente</div>
            <div className={styles.nodeRole}>Acompanhado continuamente</div>
          </div>
          <div className={styles.arrow} />
          <div className={styles.node}>
            <div className={styles.nodeIcon}>
              <svg viewBox="0 0 24 24">
                <circle cx="8" cy="12" r="2" />
                <circle cx="12" cy="7" r="2" />
                <circle cx="16" cy="12" r="2" />
                <path d="M10 12h2M12 9v1M12 12h2" />
              </svg>
            </div>
            <div className={styles.nodeLabel}>IA</div>
            <div className={styles.nodeRole}>Identifica sinais e prioriza</div>
          </div>
          <div className={styles.arrow} />
          <div className={styles.node}>
            <div className={styles.nodeIcon}>
              <svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M8 7V5h8v2"/></svg>
            </div>
            <div className={styles.nodeLabel}>Equipe de Saúde</div>
            <div className={styles.nodeRole}>Decide e intervém</div>
          </div>
        </div>
      </div>
    </section>
  )
}
