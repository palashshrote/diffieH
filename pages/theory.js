import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function theory() {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>Theory</h1>
        <p className={styles.the_desc}>
            Diffie-Hellman protocol allows two communicating parties, say Alice and Bob, to create a symmetric session key with out the need of a KDC (Key Distribution Center)
        </p>
        <h2 className={styles.sub_title}>Diffie-Hellman Protocol</h2>
        <p className={styles.the_desc}>
            Alice and Bob chose two numbers p and g which are public.
            <br></br>
            ‘p’ is a large prime of the order of 1024 bits. ‘g’ is a generator of order p-1 in the group Z p*
            <br></br>
            Alice chooses a large random number ‘x’ in the range 0 to p-1 and calculates R1 = g^x mod p
            <br></br>
            Bob chooses a large random number ‘y’ in the range 0 to p-1 and calculates R2 = g^y mod p
            <br></br>
            Alice sends R1 to Bob and Bob sends R2 to Alice
            <br></br>
            Alice Calculates K = R2^x mod p
            <br></br>
            Bob Calculates K = R1^y mod p
            <br></br>
            K = (g^x mod p)^y mod p = (g^y mod p)^x
 mod p = g^xy mod p
            <br></br>
            K is the symmetric key for the session
            <br></br>
            <Image priority className={styles.myImg} width={600} height={700} alt='No_img' src='/diffieH_img.png'/>
        </p>
        
    </div>
  )
}

export default theory