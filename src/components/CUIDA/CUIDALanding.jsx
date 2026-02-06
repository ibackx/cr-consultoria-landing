import React, { useState } from 'react'
import styles from '../../styles/CUIDA.Light.module.css'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import WhatsAppButton from '../WhatsAppButton.jsx'
import AIWidgetStub from '../AIWidgetStub.jsx'
import SchedulerModal from '../SchedulerModal.jsx'

import VisualHero from './VisualHeroCUIDA.jsx'
import Diagram from './DiagramCUIDA.jsx'
import Pilares from './PilaresCUIDA.jsx'
import FluxoVisual from './FluxoVisualCUIDA.jsx'
import ComplementoTexto from './ComplementoTextoCUIDA.jsx'

export default function CUIDALanding() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.page}>
      <Header compact onCta={() => setOpen(true)} />
      <main>
        <VisualHero onPrimary={() => setOpen(true)} />
        <Diagram />
        <Pilares />
        <FluxoVisual />
        <ComplementoTexto />
      </main>
      <Footer light />
      <WhatsAppButton />
      <AIWidgetStub />
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
