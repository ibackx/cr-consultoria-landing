import React from 'react'
import styles from '../../styles/CUIDA.Light.module.css'

export default function VisualHeroCUIDA({ onPrimary }) {
  return (
    <section id="cuida-hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroWrap}>
          <div>
            <div className={styles.heroBadge}><span className={styles.dot} /> Produto de saúde desenvolvido pela CR Consultoria</div>
            <h1 className={styles.heroTitle}>CUIDA reconecta pacientes crônicos ao cuidado.</h1>
            <p className={styles.heroSubtitle}>Visual, simples e clínico. Entende-se em segundos. Funciona no cuidado real.</p>
            <div style={{marginTop:16}}>
              <button onClick={onPrimary} style={{background:'var(--cuida-primary)',color:'#06251e',border:'none',borderRadius:12,padding:'10px 16px',fontWeight:800,cursor:'pointer'}}>Solicitar apresentação institucional</button>
            </div>
          </div>
          <div className={styles.heroImage} aria-hidden="true">
            <img src="/Doctora.png" alt="Profissional de saúde representando o cuidado" />
          </div>
        </div>
      </div>
    </section>
  )
}
