import React from 'react'
import styles from '../../styles/CUIDA.module.css'
import ClinicalStep from './ui/ClinicalStep.jsx'

const etapas = [
  { n: 1, t: 'Entrada no programa', d: 'Paciente é incluído no acompanhamento clínico.' },
  { n: 2, t: 'Contatos periódicos', d: 'CUIDA realiza contatos programados e registra respostas.' },
  { n: 3, t: 'Sinais e riscos', d: 'Identifica sinais de abandono e fatores de risco.' },
  { n: 4, t: 'Apoio à decisão', d: 'Organiza dados e apoia decisões da equipe de saúde.' },
  { n: 5, t: 'Acionamento', d: 'Aciona profissionais quando necessário para intervenção.' },
]

export default function ComoFuncionaCUIDA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Como o CUIDA funciona</h2>
        <p className={styles.lead}>Fluxo clínico contínuo — etapas conectadas, com supervisão humana.</p>
        <div className={styles.flow}>
          <div className={styles.timeline5}>
            {etapas.map(e => (
              <ClinicalStep key={e.n} number={e.n} title={e.t} description={e.d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
