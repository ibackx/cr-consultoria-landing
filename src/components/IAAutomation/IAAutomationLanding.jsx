import React, { useState } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer'
import SchedulerModal from '../SchedulerModal'
import styles from '../../styles/IAAutomation.module.css'

function Hero({ onContact }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Agentes de IA que trabalham pelo seu negócio.</h1>
          <p className={styles.heroSub}>Desenhamos e implementamos agentes de IA sob medida para automatizar processos, apoiar decisões e liberar seu time para o que realmente importa.</p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => onContact?.()}>Falar com um especialista</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problema() {
  const items = [
    { t: 'Horas perdidas em tarefas repetitivas', icon: (
      <svg viewBox="0 0 24 24"><path d="M8 4h8M8 20h8"/><path d="M8 6l8 6-8 6"/></svg>
    ) },
    { t: 'Decisões sem dados claros', icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M10 9c0-1.5 2-2.2 3.2-1.2 1 .8.8 2-.2 2.8-.7.6-1 1.1-1 2"/><circle cx="12" cy="16" r="1"/></svg>
    ) },
    { t: 'Processos manuais que não se conectam', icon: (
      <svg viewBox="0 0 24 24"><path d="M7 8c0-1.7 1.3-3 3-3s3 1.3 3 3"/><path d="M14 16c0 1.7 1.3 3 3 3s3-1.3 3-3"/><path d="M12 12l2 2"/></svg>
    ) },
    { t: 'Pessoas presas à operação, não à estratégia', icon: (
      <svg viewBox="0 0 24 24"><rect x="7" y="9" width="10" height="9" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/></svg>
    ) },
  ]
  return (
    <section className={styles.problem}>
      <div className="container">
        <div className={styles.blockTitle}>O problema</div>
        <div className={styles.problemGrid}>
          {items.map((it) => (
            <article key={it.t} className={styles.problemCard}>
              <div className={styles.pIcon}>{it.icon}</div>
              <p className={styles.pText}>{it.t}</p>
            </article>
          ))}
        </div>
        <p className={styles.problemNote}>Tudo isso consome tempo, gera erro e trava crescimento.</p>
      </div>
    </section>
  )
}

function Especialidade() {
  const bullets = [
    'Integração com sistemas existentes',
    'Regras de negócio claras',
    'Supervisão humana',
    'Evolução contínua',
  ]
  return (
    <section className={styles.specialty}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nossa especialidade é transformar processos em agentes de IA</h2>
        <p className={styles.sectionText}>Não entregamos bots genéricos. Criamos agentes de IA a partir de processos reais, integrados aos sistemas do cliente e orientados a resultado.</p>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <span className={styles.bulletIcon}><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/></svg></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className={styles.sectionNote}>IA aplicada com controle, contexto e responsabilidade.</p>
      </div>
    </section>
  )
}

function Exemplos() {
  const examples = [
    { name: 'Nerd', desc: 'Agente de redes sociais que planeja e executa conteúdo automaticamente.' },
    { name: 'Theo', desc: 'Agente secretário para organização, lembretes e tarefas recorrentes.' },
    { name: 'Pablo', desc: 'Agente de prospecção que identifica oportunidades comerciais.' },
    { name: 'Alex', desc: 'Agente analista comercial que apoia decisões de venda.' },
    { name: 'Jonny', desc: 'Agente de vendas que executa estratégias e aciona humanos no momento certo.' },
  ]
  return (
    <section className={styles.examples}>
      <div className="container">
        <div className={styles.blockTitle}>Implementações reais</div>
        <h2 className={styles.sectionTitle}>Agentes que já colocamos para trabalhar em negócios reais</h2>
        <p className={styles.sectionText}>Exemplos práticos do que já implementamos — cada agente nasce de um processo específico.</p>
        <div className={styles.cards}>
          {examples.map((ex) => (
            <article key={ex.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{ex.name[0]}</div>
                <div>
                  <div className={styles.cardTitle}>{ex.name}</div>
                  <div className={styles.cardSub}>{ex.desc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MensagemChave() {
  return (
    <section className={styles.messageKey}>
      <div className="container">
        <h2 className={styles.sectionTitle}>O mais importante não é o agente. É o processo.</h2>
        <p className={styles.sectionText}>Esses agentes são exemplos.<br/>O valor está em entender processos, desenhar fluxos claros e aplicar IA onde ela realmente faz sentido.</p>
        <p className={styles.messageSub}>Processo primeiro. Tecnologia como meio.</p>
      </div>
    </section>
  )
}

function ComoTrabalhamos() {
  const steps = [
    { t: 'Entendemos o processo real', sub: '(como o trabalho acontece hoje)' },
    { t: 'Desenhamos o agente certo', sub: '(regras claras, sem exagero)' },
    { t: 'Implementamos e integramos', sub: '(sem quebrar o que já funciona)' },
    { t: 'Acompanhamos e evoluímos', sub: '(com supervisão humana)' },
  ]
  return (
    <section className={styles.how}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Como transformamos processos em agentes de IA</h2>
        <div className={styles.flow}>
          {steps.map((s, i) => (
            <React.Fragment key={s.t}>
              <div className={styles.step}>
                <div className={styles.stepBadge}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.stepLabel}>{s.t}</div>
                <div className={styles.stepSub}>{s.sub}</div>
              </div>
              {i < steps.length - 1 && <div className={styles.flowArrow} />}
            </React.Fragment>
          ))}
        </div>
        <p className={styles.flowNote}>Cada etapa existe para garantir controle, clareza e resultado real.</p>
      </div>
    </section>
  )
}

function CTAFinal({ onContact }) {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Vamos entender juntos como a IA pode trabalhar no seu negócio.</h2>
        <p className={styles.sectionText}>Conversamos sobre seus processos e avaliamos onde a automação faz sentido.</p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => onContact?.()}>Agendar uma conversa</button>
        </div>
      </div>
    </section>
  )
}

export default function IAAutomationLanding() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header onCta={() => setOpen(true)} />
      <main>
        <Hero onContact={() => setOpen(true)} />
        <Problema />
        <Especialidade />
        <Exemplos />
        <MensagemChave />
        <ComoTrabalhamos />
        <CTAFinal onContact={() => setOpen(true)} />
      </main>
      <Footer />
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
