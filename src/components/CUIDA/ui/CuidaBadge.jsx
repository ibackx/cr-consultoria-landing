import React from 'react'
import styles from '../../../styles/CUIDA.module.css'

export default function CuidaBadge({ className = '' }) {
  return (
    <div className={styles.badge + (className ? ' ' + className : '')}>
      <span className={styles.badgeDot} aria-hidden="true" />
      <span className={styles.badgeText}>Produto de Saúde — CR Consultoria</span>
    </div>
  )
}
