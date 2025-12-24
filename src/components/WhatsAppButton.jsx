import React from 'react'
import styles from '../styles/WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5551998513199"
      className={styles.whatsapp}
      aria-label="Abrir WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  )
}
