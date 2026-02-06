import React, { useState } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer'
import SchedulerModal from '../SchedulerModal'
import styles from '../../styles/DigitalSolutions.module.css'

function Hero({ onContact }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Soluções digitais prontas para vender e comunicar.</h1>
          <p className={styles.heroSub}>Criamos sites institucionais e e-commerce claros, funcionais e focados em conversão.<br/>Sem complexidade desnecessária.</p>
          <p className={styles.heroMicro}>Estruturas simples, manutenção fácil e base pronta para evoluir.</p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => onContact?.()}>Agendar uma conversa</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problema() {
  const items = [
    { t: 'Sites que não convertem', icon: (<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8"/></svg>) },
    { t: 'Comunicação confusa', icon: (<svg viewBox="0 0 24 24"><path d="M6 7h12"/><path d="M6 12h9"/><path d="M6 17h12"/></svg>) },
    { t: 'Sistemas difíceis de manter', icon: (<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6M9 13h6"/></svg>) },
    { t: 'Dependência de terceiros para mudanças simples', icon: (<svg viewBox="0 0 24 24"><path d="M6 8h12"/><path d="M6 12h12"/><path d="M6 16h8"/></svg>) },
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
        <p className={styles.problemNote}>Tudo isso gera atrito, perda de oportunidades e retrabalho.</p>
      </div>
    </section>
  )
}

function Abordagem() {
  const bullets = [
    'Estrutura clara e objetiva',
    'Foco em conversão',
    'Fácil manutenção',
    'Preparado para escalar'
  ]
  return (
    <section className={styles.approach}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nosso foco é funcionalidade e resultado.</h2>
        <p className={styles.sectionText}>Não criamos “sites bonitos” apenas. Criamos soluções digitais que funcionam no dia a dia do negócio, com clareza, performance e autonomia.</p>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <span className={styles.bulletIcon}><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/></svg></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Entregamos() {
  const cards = [
    { t: 'Web institucional', s: 'Sites claros e profissionais, pensados para comunicar valor e gerar confiança.' , icon: (<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/></svg>) },
    { t: 'E-commerce', s: 'Plataformas prontas para vender, com fluxo simples e foco em conversão.' , icon: (<svg viewBox="0 0 24 24"><path d="M6 7h12"/><path d="M6 12h12"/><path d="M6 17h12"/></svg>) },
    { t: 'Integrações', s: 'Conexão com sistemas, formulários e pagamentos para eliminar retrabalho.' , icon: (<svg viewBox="0 0 24 24"><path d="M7 8a3 3 0 0 1 6 0v2"/><rect x="7" y="10" width="10" height="8" rx="2"/></svg>) },
    { t: 'Base para evolução', s: 'Arquitetura preparada para crescer com IA, automação e dados.' , icon: (<svg viewBox="0 0 24 24"><path d="M6 16l6-6 6 6"/></svg>) },
  ]
  return (
    <section className={styles.deliver}>
      <div className="container">
        <h2 className={styles.sectionTitle}>O que entregamos</h2>
        <div className={styles.cards}>
          {cards.map((c) => (
            <article key={c.t} className={styles.card}>
              <div className={styles.cardIcon}>{c.icon}</div>
              <div>
                <div className={styles.cardTitle}>{c.t}</div>
                <div className={styles.cardSub}>{c.s}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ParaQuem() {
  const items = [
    { t: 'Pequenas e médias empresas', s: 'Estrutura digital confiável para crescer sem depender de soluções improvisadas.' },
    { t: 'Serviços profissionais', s: 'Presença digital clara para vender serviços, organizar demandas e ganhar eficiência.' },
    { t: 'Negócios digitais', s: 'Plataformas estáveis e integradas para quem já opera online e precisa escalar.' },
    { t: 'Empresas em estruturação', s: 'Base digital bem feita desde o início, sem retrabalho no futuro.' },
  ]
  return (
    <section className={styles.audience}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Para quem isso faz sentido</h2>
        <div className={styles.audienceRow}>
          {items.map((i) => (
            <article key={i.t} className={styles.audCard}>
              <div className={styles.audTitle}>{i.t}</div>
              <div className={styles.audSub}>{i.s}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Posicionamento() {
  return (
    <section className={styles.messageKey}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Tecnologia simples. Comunicação clara. Resultado prático.</h2>
        <p className={styles.sectionText}>Digital bem feito não atrapalha — ele faz o negócio andar.</p>
      </div>
    </section>
  )
}

function CTAFinal({ onContact }) {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Quer estruturar sua presença digital com clareza?</h2>
        <p className={styles.sectionText}>Conversamos sobre seu negócio e indicamos a solução digital mais adequada.</p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => onContact?.()}>Agendar uma conversa</button>
        </div>
      </div>
    </section>
  )
}

export default function DigitalSolutionsLanding() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header onCta={() => setOpen(true)} />
      <main>
        <Hero onContact={() => setOpen(true)} />
        <Problema />
        <Abordagem />
        <Entregamos />
        <ParaQuem />
        <Posicionamento />
        <CTAFinal onContact={() => setOpen(true)} />
      </main>
      <Footer />
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
