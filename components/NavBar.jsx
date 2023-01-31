import Link from 'next/link'
import style from '../styles/NavBar.module.css'

export default function NavBar () {
  return (
    <nav className={style.nav}>
      <Link href='/' className={style.link}>Inicio</Link>
      <Link href='#' className={style.link}>Sobre mi</Link>
      <Link href='#' className={style.link}>Proyectos</Link>
      <Link href='#' className={style.link}>Contacto</Link>
    </nav>
  )
}
