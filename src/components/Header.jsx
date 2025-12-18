import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#hero" className={`${styles.brand} ${styles.logoOnly}`} aria-label="CR Consultoria Home">
          <img src="/cr-logo.png" alt="CR Consultoria" className={styles.logo} />
          <span className={styles.brandText}>CR Consultoria</span>
        </a>
        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#como-trabalhamos">Como Trabalhamos</a>
          <a href="#contato" className={styles.cta}>Agendar uma conversa</a>
        </nav>
      </div>
    </header>
  )
}
