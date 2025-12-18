import React from 'react'
import styles from '../styles/WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      href="#" // mock sem integração real
      className={styles.whatsapp}
      aria-label="Abrir WhatsApp"
    >
      WhatsApp
    </a>
  )
}
