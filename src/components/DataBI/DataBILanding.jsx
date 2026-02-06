import React, { useState } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer'
import SchedulerModal from '../SchedulerModal'
import styles from '../../styles/DataBI.module.css'

function Hero({ onContact }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Dados que viram decisões. No momento certo.</h1>
          <p className={styles.heroSub}>Transformamos dados financeiros e operacionais em informações claras, acionáveis e úteis para quem decide.</p>
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
    { t: 'Dados espalhados que não se conversam', icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="6" rx="2"/><rect x="4" y="13" width="16" height="6" rx="2"/></svg>
    ) },
    { t: 'Relatórios que chegam tarde demais', icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
    ) },
    { t: 'Decisões sem visão clara do negócio', icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 2"/></svg>
    ) },
    { t: 'Tempo perdido organizando planilhas', icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
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
        <p className={styles.problemNote}>Tudo isso reduz clareza, atrasa decisões e limita o controle do negócio.</p>
      </div>
    </section>
  )
}

function Especialidade() {
  const bullets = [
    'Dados financeiros e operacionais',
    'KPIs alinhados ao negócio',
    'Visão em tempo real',
    'Apoio direto à decisão',
  ]
  return (
    <section className={styles.specialty}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nossa especialidade é transformar dados em decisões claras</h2>
        <p className={styles.sectionText}>Não entregamos dashboards soltos. Organizamos dados e indicadores para apoiar decisões reais.</p>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <span className={styles.bulletIcon}><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/></svg></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className={styles.sectionNote}>Clareza para decidir. Controle para agir.</p>
      </div>
    </section>
  )
}

function SolucoesAplicadas() {
  const items = [
    { name: 'FIX — Financial Intelligence Xtreme', desc: 'Plataforma de gestão financeira para pequenos e médios negócios, com visão clara de entradas, saídas e resultado. Em uso por clientes reais.', ctaHref: 'https://financia-demo.vercel.app/', ctaLabel: 'Provar DEMO' },
    { name: 'Tommy — Agente de BI conversacional', desc: 'Agente de BI que responde perguntas sobre os dados do negócio e gera análises de forma conversacional, reduzindo a dependência de relatórios.' },
  ]
  return (
    <section className={styles.examples}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Soluções que já colocamos para rodar em negócios reais</h2>
        <p className={styles.sectionText}>Exemplos reais de execução — não são catálogo, são prova de capacidade.</p>
        <div className={styles.cards}>
          {items.map((ex) => (
            <article key={ex.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{ex.name[0]}</div>
                <div>
                  <div className={styles.cardTitle}>{ex.name}</div>
                  <div className={styles.cardSub}>{ex.desc}</div>
                </div>
              </div>
              {ex.ctaHref && (
                <div className={styles.cardFooter}>
                  <a href={ex.ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cardCta}>{ex.ctaLabel}</a>
                </div>
              )}
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
        <h2 className={styles.sectionTitle}>O mais importante não é o dashboard. É a decisão.</h2>
        <p className={styles.sectionText}>Ferramentas mudam. O valor está em estruturar os dados certos, no momento certo, para quem decide.</p>
        <p className={styles.messageSub}>Decisão primeiro. Tecnologia como meio.</p>
      </div>
    </section>
  )
}

function ComoTrabalhamos() {
  const steps = [
    { t: 'Entendemos o negócio', sub: 'O que precisa ser decidido, por quem e quando.' },
    { t: 'Estruturamos os dados', sub: 'Fonte única, confiável e organizada.' },
    { t: 'Definimos indicadores claros', sub: 'KPIs alinhados à gestão e ao resultado.' },
    { t: 'Criamos visão acionável', sub: 'Acompanhamento contínuo e ação prática.' },
  ]
  return (
    <section className={styles.how}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Como trabalhamos com dados</h2>
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
        <p className={styles.flowNote}>Fluxo simples. Foco em clareza, controle e decisão.</p>
      </div>
    </section>
  )
}

function CTAFinal({ onContact }) {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Quer tomar decisões com mais clareza?</h2>
        <p className={styles.sectionText}>Analisamos seus dados, seu contexto e onde a informação pode virar ação real.</p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => onContact?.()}>Agendar uma conversa</button>
        </div>
      </div>
    </section>
  )
}

export default function DataBILanding() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header onCta={() => setOpen(true)} />
      <main>
        <Hero onContact={() => setOpen(true)} />
        <Problema />
        <Especialidade />
        <SolucoesAplicadas />
        <MensagemChave />
        <ComoTrabalhamos />
        <CTAFinal onContact={() => setOpen(true)} />
      </main>
      <Footer />
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
