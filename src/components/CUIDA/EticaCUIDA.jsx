import React from 'react'
import styles from '../../styles/CUIDA.module.css'

export default function EticaCUIDA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Ética, LGPD e Responsabilidade</h2>
        <p className={styles.lead}>Compromisso institucional com a proteção de dados e a ética clínica.</p>
        <div style={{height:8}} />
        <p>O CUIDA opera em conformidade com a LGPD, adotando princípios de privacidade desde a concepção e assegurando o tratamento adequado das informações de saúde.</p>
        <p>Seu funcionamento é transparente para pacientes e instituições, com comunicação clara sobre objetivos, limites e supervisão humana permanente.</p>
        <p>As decisões clínicas permanecem sob responsabilidade de profissionais de saúde; a tecnologia apoia a organização de dados e a priorização de contatos.</p>
        <p>O uso de IA é conduzido com foco em segurança, impacto social positivo e alinhamento às boas práticas éticas do setor público e hospitalar.</p>
      </div>
    </section>
  )
}
