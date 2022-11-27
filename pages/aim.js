import React from 'react'
import styles from '../styles/Home.module.css'

const aim = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Diffie-Hellman Key Establishment</h1>
        <p className={styles.description}>
            In this experiment, we simulate certain "toy" versions of the popular Diffie-Hellman secure key exchange protocol
        </p>
        
    </div>
  )
}


export default aim