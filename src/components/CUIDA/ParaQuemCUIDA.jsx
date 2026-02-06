import React from 'react'
import styles from '../../styles/CUIDA.module.css'

export default function ParaQuemCUIDA() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <h2>Para quem é o CUIDA</h2>
        <ul className={styles.listColumns}>
          <li>Secretarias Municipais de Saúde</li>
          <li>Programas de saúde pública</li>
          <li>Clínicas médicas</li>
          <li>Hospitais</li>
          <li>Atenção primária à saúde</li>
        </ul>
      </div>
    </section>
  )
}
