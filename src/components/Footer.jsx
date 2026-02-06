import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer({ light = false }) {
  return (
    <footer className={light ? styles.footerLight : styles.footer}>
      <div className={light ? styles.containerLight : styles.container}>
        <p>© {new Date().getFullYear()} CR Consultoria. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
