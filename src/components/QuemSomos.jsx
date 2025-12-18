import React from 'react'
import styles from '../styles/QuemSomos.module.css'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className={styles.section}>
      <div className={styles.container}>
        <h2>Quem Somos</h2>
        <p>
          A CR Consultoria apoia empresas brasileiras na adoção prática de tecnologia e Inteligência Artificial.
          Atuamos com estratégia, implementação e acompanhamento contínuo para garantir resultados reais.
        </p>
        <div className={styles.blocks}>
          <article className={styles.block}>
            <h3>Missão</h3>
            <p>Gerar impacto de negócio por meio de soluções tecnológicas e de IA alinhadas aos objetivos da empresa.</p>
          </article>
          <article className={styles.block}>
            <h3>Visão</h3>
            <p>Ser referência em consultoria de IA aplicada, com foco em performance e simplicidade.</p>
          </article>
          <article className={styles.block}>
            <h3>Valores</h3>
            <p>Transparência, ética, pragmatismo e compromisso com resultado.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
