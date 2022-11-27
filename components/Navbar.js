import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link href = '/aim'><li>Aim</li></Link>
          <Link href = '/theory'><li>Theory</li></Link>
          <Link href = '/procedure'><li>Procedure</li></Link>
          <Link href = '/simulation'><li>Simulation</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar