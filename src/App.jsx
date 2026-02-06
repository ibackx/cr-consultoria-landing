import React, { useEffect } from 'react'
import styles from './styles/App.module.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import QuemSomos from './components/QuemSomos.jsx'
import Solucoes from './components/Solucoes.jsx'
import Diferenciais from './components/Diferenciais.jsx'
import ComoTrabalhamos from './components/ComoTrabalhamos.jsx'
import CTAFinal from './components/CTAFinal.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import AIWidgetStub from './components/AIWidgetStub.jsx'

export default function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash?.slice(1)
    if (!hash) return
    // Attempt scroll after render
    const scrollToHash = () => {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }
    // Try immediately and again on next frame
    if (!scrollToHash()) {
      requestAnimationFrame(() => { scrollToHash() })
      setTimeout(() => { scrollToHash() }, 100)
    }
  }, [])
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Solucoes />
        <Diferenciais />
        <ComoTrabalhamos />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIWidgetStub />
    </div>
  )
}
