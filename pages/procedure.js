import React from 'react'
import styles from '../styles/Home.module.css'

const procedure = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Procedure</h1>
        <p className={styles.the_desc}>
        <ul>
            <li>STEP 1 : Choose a large prime number p and a generator g.</li>
            <li>STEP 2 : Alice chooses large random numbers a and calculates R1 = g^a mod p  </li>   
            <li>STEP 3 : Alice chooses large random numbers b and calculates R2 = g^b mod p</li>   
            <li>STEP 4 : Alice sends R1 to Bob. Note that Alice does not send the value of a; she sends only R1.</li>   
            <li>STEP 5 : Bob sends R2 to Alice. Again note that Bob does not send the value of b; he sends only R2.</li>   
            <li>STEP 6 : Alice calculates Ka = R2^a mod p.</li>
	<li>STEP 7 : Bob calculates Kb = R1^b mod p.</li>  
	<li>STEP 8 : If Ka = Kb, Ka is the symmetric key for the session.</li>  
            
        </ul>
        </p>
        {/* <p className={styles.description}>
            
        </p> */}
    </div>
  )
}

export default procedure
