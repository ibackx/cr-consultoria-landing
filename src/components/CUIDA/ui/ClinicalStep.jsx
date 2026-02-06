import React from 'react'
import styles from '../../../styles/CUIDA.module.css'

export default function ClinicalStep({ number, title, description }) {
  const numStr = String(number).padStart(2, '0')
  return (
    <div className={styles.clinicalStep}>
      <div className={styles.stepHeader}>
        <div className={styles.stepNumber}><span>{numStr}</span></div>
        <h3 className={styles.stepTitle}>{title}</h3>
      </div>
      {description && <p className={styles.stepDescription}>{description}</p>}
    </div>
  )
}
