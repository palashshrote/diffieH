import React from 'react'
import styles from '../styles/Home.module.css'

const obj = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Objective</h1>
        <p className={styles.description}>
            To understand the DH-key exchange protocol
        </p>
    </div>
  )
}

export default obj