import React, { useState } from 'react'
import styles from '../../styles/ReserveOne.module.css'
import SchedulerModal from '../SchedulerModal'
import Header from '../Header.jsx'
import Footer from '../Footer'

// Using shared compact CR header

function Hero({ onDemo }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>Centralize suas reservas.<br/>Sem erros. Sem sobrecarga.</h1>
            <p className={styles.heroSub}>Um único motor de reservas para chat próprio, web e backoffice.</p>
            <div className={styles.heroActions}>
              <a href="#como-funciona" className={styles.btnSecondary}>Ver como funciona</a>
              <button className={styles.btnPrimary} onClick={() => onDemo?.()}>Solicitar demonstração</button>
            </div>
          </div>
          <div className={styles.heroViz} aria-hidden="true">
            <img src="/Restaurante.png" alt="Ilustração de operação de reservas em restaurante" className={styles.heroImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Problema() {
  // Ordered to tell the temporal story: começa o caos → improviso → não se controla → explode
  const items = [
    { title: 'Mensagens perdidas', sub: 'Pedidos que não chegam', icon: (
        <svg viewBox="0 0 24 24"><path d="M4 5h16v10H7l-3 3z"/></svg>
      ) },
    { title: 'Planilhas manuais', sub: 'Erro humano e falta de escala', icon: (
        <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v16M4 8h16M12 8v12"/></svg>
      ) },
    { title: 'Sem controle de disponibilidade', sub: 'Overbooking ou mesas vazias', icon: (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v6l4 2"/></svg>
      ) },
    { title: 'Reservas duplicadas', sub: 'Conflitos e retrabalho', icon: (
        <svg viewBox="0 0 24 24"><path d="M4 7h12v10H4z"/><path d="M8 7h12v10H8z"/></svg>
      ) },
  ]
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <div className={styles.blockTitle}>O caos das reservas no dia a dia</div>
        <div className={styles.problemGrid}>
          {items.map((it) => (
            <article key={it.title} className={styles.problemCard}>
              <div className={styles.pIcon}>{it.icon}</div>
              <h3>{it.title}</h3>
              <p className={styles.problemSub}>{it.sub}</p>
            </article>
          ))}
        </div>
        <p className={styles.problemNote}>Tudo isso acontece quando as reservas não passam por um único motor.</p>
      </div>
    </section>
  )
}

function SolucaoDiagram() {
  return (
    <section id="como-funciona" className={styles.solution}>
      <div className={styles.container}>
        <div className={styles.blockTitle}>Como o ReserveOne organiza</div>
        <div className={styles.solutionRow}>
          <div className={styles.sNode}>
            <div className={styles.sIcon}>
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M6 9h8"/></svg>
            </div>
            <div className={styles.sLabel}>Pedidos de reserva</div>
            <div className={styles.sSub}>Canal de entrada</div>
          </div>
          <div className={styles.sArrow} />
          <div className={styles.sNodeCenter}>
            <div className={styles.sIconCenter}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></svg>
            </div>
            <div className={styles.sLabel}>ReserveOne</div>
            <div className={styles.sSub}>Motor central de reservas</div>
          </div>
          <div className={styles.sArrow} />
          <div className={styles.sNode}>
            <div className={styles.sIcon}>
              <svg viewBox="0 0 24 24"><path d="M4 7h16v10H4z"/><path d="M8 11h8M8 15h6"/></svg>
            </div>
            <div className={styles.sLabel}>Equipe do negócio</div>
            <div className={styles.sSub}>Agenda organizada</div>
          </div>
        </div>
        <p className={styles.diagramNote}>Tudo passa por um único motor. Sem duplicações. Sem confusão.</p>
      </div>
    </section>
  )
}

function Pilares() {
  const items = [
    { title: 'Omnicanal', sub: 'Todos os pedidos entram no mesmo motor', icon: (<svg viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M3 12h18"/></svg>) },
    { title: 'Capacidade sob controle', sub: 'Sem conflitos, sem sobrecarga', icon: (<svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8M8 14h5"/></svg>) },
    { title: 'Backoffice claro', sub: 'Visão simples para a equipe operar', icon: (<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h6M8 17h4"/></svg>) },
    { title: 'Menos erros. Mais conversão.', sub: 'Processo guiado do pedido à confirmação', icon: (<svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/></svg>) },
  ]
  return (
    <section className={styles.pillars}>
      <div className={styles.container}>
        <div className={styles.pillarsGrid}>
          {items.map((it, i) => (
            <article key={it.title} className={`${styles.pillar} ${i === items.length - 1 ? styles.pillarHighlight : ''}`}>
              <div className={`${styles.pillarIcon} ${i === items.length - 1 ? styles.pillarIconPositive : ''}`}>{it.icon}</div>
              <h3 className={styles.pillarTitle}>{it.title}</h3>
              <p className={styles.pillarSub}>{it.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FluxoReserva() {
  const steps = [
    { t: 'Pedido recebido' },
    { t: 'Validação automática' },
    { t: 'Checagem de disponibilidade' },
    { t: 'Confirmação com o cliente' },
    { t: 'Registro no sistema' }
  ]
  return (
    <section className={styles.flow}>
      <div className={styles.container}>
        <div className={styles.flowRow}>
          {steps.map((s, i) => (
            <React.Fragment key={s.t}>
              <div className={`${styles.step} ${i === 3 ? styles.stepHuman : ''}`}>
                <div className={`${styles.stepIcon} ${i === 3 ? styles.stepIconHuman : ''}`}>
                  {i === 3 ? (
                    <svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>
                  )}
                </div>
                <div className={`${styles.stepLabel} ${i === 3 ? styles.stepLabelHuman : ''}`}>{s.t}</div>
              </div>
              {i < steps.length - 1 && <div className={styles.flowArrow} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

function ParaQuem() {
  const items = [
    { t: 'Restaurantes', sub: 'Reservas por turnos, mesas e horários de pico', icon: (
        <svg viewBox="0 0 24 24"><path d="M4 7h16v10H4z"/><path d="M8 11h8M8 15h6"/></svg>
      ) },
    { t: 'Clínicas', sub: 'Agendamentos com controle de disponibilidade', icon: (
        <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>
      ) },
    { t: 'Estúdios', sub: 'Serviços por horário e profissional', icon: (
        <svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M8 9h8M8 13h6"/></svg>
      ) },
    { t: 'Serviços com agenda', sub: 'Qualquer negócio que depende de horário', icon: (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v6l3 2"/></svg>
      ) },
  ]
  return (
    <section id="para-quem" className={styles.targets}>
      <div className={styles.container}>
        <div className={styles.targetsGrid}>
          {items.map((it) => (
            <article key={it.t} className={styles.targetCard}>
              <div className={styles.tIcon}>{it.icon}</div>
              <h3 className={styles.tTitle}>{it.t}</h3>
              <p className={styles.tSub}>{it.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTAFinal({ onDemo }) {
  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <h2>Leve o controle das suas reservas para o próximo nível.</h2>
        <p className={styles.heroSub} style={{marginBottom:16}}>Veja como o ReserveOne funciona no dia a dia do seu negócio.</p>
        <div className={styles.finalActions}>
          <button className={styles.btnPrimary} onClick={() => onDemo?.()}>Quero ver uma demo</button>
          <a className={styles.btnSecondaryLight} href="#como-funciona">Ver como funciona</a>
        </div>
      </div>
    </section>
  )
}

export default function ReserveOneLanding() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.page}>
      <Header compact onCta={() => setOpen(true)} />
      <main>
        <Hero onDemo={() => setOpen(true)} />
        <Problema />
        <SolucaoDiagram />
        <Pilares />
        <FluxoReserva />
        <ParaQuem />
        <CTAFinal onDemo={() => setOpen(true)} />
      </main>
      <Footer light />
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
