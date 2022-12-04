import React from 'react'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


const aim = () => {
  return (
    <>
      <div className={styles.main}>
        
          
      <h1 className={styles.title}>Diffie-Hellman Mutual Key Exchange Algorithm</h1>
      <div className={styles.description}>
        To understand the implementation of symmetric session key agreement without use of trusted third party server.
      </div>

        
      </div>
      <Footer/>
    </>
  )
}


export default aim