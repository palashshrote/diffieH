import React from 'react'
import styles from '../styles/Home.module.css'

const procedure = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Procedure</h1>
        <p className={styles.the_desc}>
        <ul>
            <li>STEP 1 : Firstly,choose a large prime number p and a generator g for that prime.</li>
            <li>STEP 2 : Secondly,both Alice and Bob generate their respective keys A and B. And (ga,gb) for their keys respectively.</li>   
            <li>STEP 3 : Both Alice and bob exchange their ga,gb.</li>   
            <li>STEP 4 : Finally,both calculate their public keys gab and gba repectively.</li>   
            <li>STEP 5 : If both gab and gba are equal then Deffie-Hellman key exchange is verified.</li>   
           
            
        </ul>
        </p>
        
    </div>
  )
}

export default procedure