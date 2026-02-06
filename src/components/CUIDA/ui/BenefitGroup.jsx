import React from 'react'
import styles from '../../../styles/CUIDA.module.css'

export default function BenefitGroup({ icon, title, children }) {
  return (
    <article className={styles.benefitGroup}>
      <div className={styles.benefitHeader}>
        <span className={styles.benefitIcon} aria-hidden="true">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.benefitBody}>{children}</div>
    </article>
  )
}
