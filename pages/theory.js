import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function theory() {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Theory</h1>
        <div className={styles.the_desc}>
            Diffie-Hellman protocol allows two communicating parties, say Alice and Bob, to create a symmetric session key with out the need of a KDC (Key Distribution Center).
        </div>
        <h2 className={styles.sub_title}>Diffie-Hellman Protocol</h2>
        <div className={styles.the_desc}>
            Alice and Bob chose two numbers p and g which are public.
            <br></br>
            ‘p’ is a large prime of the order of 1024 bits. ‘g’ is a generator of order p-1 in the group [Z p*, X]
            <br></br>
            Alice chooses a large random number ‘a’ in the range 0 to p-1 and calculates R1 = g^a mod p
            <br></br>
            Bob chooses a large random number ‘b’ in the range 0 to p-1 and calculates R2 = g^b mod p
            <br></br>
            Alice sends R1 to Bob and Bob sends R2 to Alice
            <br></br>
            Alice Calculates Ka = (R2)^a mod p
            <br></br>
            Bob Calculates Kb = (R1)^b mod p
            <br></br>
            K = (g ^a mod p)b mod p = (g(^b mod p)a
 mod p = g^ab mod p
            <br></br>
            K is the symmetric key for the session
            <br></br>
            <Image priority className={styles.myImg} width={600} height={700} alt='No_img' src='/diffieH_img.png'/>
        </div>
        
    </div>
  )
}

export default theory
