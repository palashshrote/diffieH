import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Developed by:  </h3>
      <div className={styles.abt_names}>
        Mansi K.<br></br>
        Nikita S.<br></br>
        Palash S.<br></br>
      </div>
      
      
    </footer>
  )
}

export default Footer