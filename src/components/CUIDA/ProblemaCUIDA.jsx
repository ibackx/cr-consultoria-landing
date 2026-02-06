import React from 'react'
import styles from '../../styles/CUIDA.module.css'

export default function ProblemaCUIDA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>O Problema</h2>
        <p className={styles.lead}>Desafios no acompanhamento de pacientes crônicos:</p>
        <div style={{height:8}} />
        <ul className={styles.clinicalList}>
          <li className={styles.clinicalItem}>
            <svg className={styles.clinicalIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="9"/></svg>
            <span>Abandono do controle médico e baixa adesão ao cuidado.</span>
          </li>
          <li className={styles.clinicalItem}>
            <svg className={styles.clinicalIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18"/><path d="M7 12a5 5 0 0 0 10 0"/></svg>
            <span>Falta de contato contínuo e visão integrada do paciente.</span>
          </li>
          <li className={styles.clinicalItem}>
            <svg className={styles.clinicalIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l12 6-12 6Z"/></svg>
            <span>Sobrecarga das equipes de saúde e tempo limitado.</span>
          </li>
          <li className={styles.clinicalItem}>
            <svg className={styles.clinicalIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            <span>Dados dispersos e pouco acionáveis para decisão.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
