import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} CR Consultoria. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
