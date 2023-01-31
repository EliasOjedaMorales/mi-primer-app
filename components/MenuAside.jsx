'use client'
import Weather from './Weather'
import Clock from './Clock'
import style from '../styles/TopPage.module.css'
import NavBar from './NavBar'
import Image from 'next/image'
import EGOM from '../public/logoWix.jpg'
import { useState } from 'react'

export default function TopPage () {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const buttonStyle = !isMenuOpen ? 'Menú' : 'Cerrar'

  return (
    <header className={style.container}>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${style.button} ${isMenuOpen ? style.active : ''}`}> {buttonStyle}</button>
      <div className={style.header} id={`${isMenuOpen ? style.menu_open : style.menu_closed}`}>
        <Image src={EGOM} alt='Logo personal' className={style.logo} />
        <Clock className={style.clock} />
        <NavBar className={style.navBar} />
        <Weather className={style.weather} />
      </div>
    </header>
  )
}
