import React from 'react'
import styles from '../../styles/CUIDA.module.css'
import BenefitGroup from './ui/BenefitGroup.jsx'

export default function BeneficiosCUIDA() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <h2>Benefícios</h2>
        <div className={styles.cards3}>
          <BenefitGroup
            icon={<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2 19 6v5c0 5-3 9-7 11-4-2-7-6-7-11V6l7-4" fill="none" strokeWidth="2"/></svg>}
            title="Para o sistema de saúde"
          >
            <p>Uso responsável de recursos com visão integrada do cuidado.</p>
            <p>Reduz abandono em programas ao manter o acompanhamento ativo.</p>
          </BenefitGroup>
          <BenefitGroup
            icon={<svg viewBox="0 0 24 24" width="16" height="16"><rect x="5" y="8" width="14" height="10" rx="2" ry="2" fill="none" strokeWidth="2"/><path d="M8 8V6h8v2" strokeWidth="2"/></svg>}
            title="Para equipes médicas"
          >
            <p>Mais tempo para atividades clínicas essenciais.</p>
            <p>Priorização baseada em sinais e dados objetivos.</p>
          </BenefitGroup>
          <BenefitGroup
            icon={<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21s-7-5-7-10a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 5-7 10-7 10" fill="none" strokeWidth="2"/></svg>}
            title="Para pacientes"
          >
            <p>Contato contínuo e apoio real à adesão.</p>
            <p>Reconexão com a equipe de saúde quando necessário.</p>
          </BenefitGroup>
        </div>
      </div>
    </section>
  )
}
