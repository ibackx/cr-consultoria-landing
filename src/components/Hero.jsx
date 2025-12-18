import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.badge}>Consultoria estratégica em IA · Brasil</span>
        <h1 className={styles.headline}>
          Acelere resultados com <span className={styles.highlight}>Inteligência&nbsp;Artificial</span> aplicada ao seu negócio
        </h1>
        <p className={styles.subheadline}>Estratégia, implementação e dados para gerar valor real — rápido, medível e alinhado aos seus objetivos.</p>
        <div className={styles.actions}>
          <a href="#contato" className={styles.ctaPrimary}>Agendar uma conversa</a>
          <a href="#solucoes" className={styles.ctaSecondary}>Conhecer soluções</a>
        </div>
      </div>
    </section>
  )
}
