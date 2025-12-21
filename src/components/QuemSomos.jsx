import React from 'react'
import styles from '../styles/QuemSomos.module.css'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className={styles.section}>
      <div className={styles.container}>
        <h2 className="gradientText">Quem Somos</h2>
        <div className={styles.intro}>
          <p>
            A CR Consultoria nasceu da experiência prática em empresas de tecnologia e da convicção de que a relação com o cliente deve ser baseada em parceria, transparência e confiança.
          </p>
          <p>
            Atuamos com pequenas e médias empresas que querem competir em um mercado cada vez mais tecnológico, priorizando eficiência, simplicidade e retorno real — sem investimentos excessivos ou soluções complexas.
          </p>
          <p>
            Desenvolvemos software com uma visão diferente: usamos automação e inteligência artificial para reduzir o trabalho operacional e permitir que as pessoas atuem em um papel mais estratégico, supervisionando processos em vez de executar tarefas repetitivas.
          </p>
        </div>
        <div className={styles.blocks}>
          <article className={styles.block}>
            <h3>Missão</h3>
            <p>Gerar impacto real nos negócios por meio de tecnologia e inteligência artificial aplicadas com transparência, eficiência e foco em resultado.</p>
          </article>
          <article className={styles.block}>
            <h3>Visão</h3>
            <p>Ser referência em consultoria de tecnologia e IA para pequenas e médias empresas, ajudando-as a competir com inteligência, simplicidade e sustentabilidade.</p>
          </article>
          <article className={styles.block}>
            <h3>Valores</h3>
            <ul className={styles.list}>
              <li>Transparência radical na comunicação</li>
              <li>Relação de parceria com o cliente</li>
              <li>Pragmatismo e foco em resultado</li>
              <li>Tecnologia a serviço das pessoas</li>
              <li>Eficiência sem desperdício de recursos</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
