import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

const root = createRoot(document.getElementById('root'))
const path = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '/'

;(async () => {
  const mod = path === '/cuida'
    ? await import('./components/CUIDA/CUIDALanding.jsx')
    : path === '/reserveone'
    ? await import('./components/ReserveOne/ReserveOneLanding.jsx')
    : path === '/ia-automacao'
    ? await import('./components/IAAutomation/IAAutomationLanding.jsx')
    : path === '/dados-e-decisao' || path === '/solucoes/dados-e-decisao'
    ? await import('./components/DataBI/DataBILanding.jsx')
    : path === '/solucoes-digitais'
    ? await import('./components/DigitalSolutions/DigitalSolutionsLanding.jsx')
    : await import('./App.jsx')
  const Page = mod.default
  root.render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  )
})()
