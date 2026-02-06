import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header({ onCta, compact = false }) {
  return (
    <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
      <div className={styles.container}>
        <a href="/" className={`${styles.brand} ${styles.logoOnly}`} aria-label="CR Consultoria Home">
          <img src="/cr-logo.png" alt="CR Consultoria" className={styles.logo} />
          <span className={styles.brandText}>CR Consultoria</span>
        </a>
        <nav className={styles.nav} aria-label="Navegação principal">
          {typeof window !== 'undefined' && ['\/cuida','\/reserveone','\/ia-automacao','\/dados-e-decisao','\/solucoes-digitais'].includes(window.location.pathname.toLowerCase()) ? (
            <>
              <a href="/#solucoes">Soluções</a>
              <a href="/#diferenciais">Diferenciais</a>
              <a href="/#como-trabalhamos">Como Trabalhamos</a>
              <a
                href={onCta ? '#' : '#contato'}
                onClick={(e) => { if (onCta) { e.preventDefault(); onCta(); } }}
                className={styles.cta}
              >Agendar uma conversa</a>
            </>
          ) : (
            <>
              <a href="#solucoes">Soluções</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#como-trabalhamos">Como Trabalhamos</a>
              <a href="#contato" className={styles.cta}>Agendar uma conversa</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
