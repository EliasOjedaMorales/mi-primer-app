import Link from 'next/link'
import style from '../styles/NavBar.module.css'
import Image from 'next/image'
import Logo from '../public/logoWix.jpg'

export default function NavBar () {
  return (
    <nav className={style.nav}>
      <Image src={Logo} alt='Logo' className={style.logo} />
      <ul className={style.ul}>
        <li className={style.li}><Link href='#' className={style.link}>Pagina Principal</Link></li>
        <li className={style.li}><Link href='#' className={style.link}>Sobre mi</Link></li>
        <li className={style.li}><Link href='#' className={style.link}>proyectos</Link></li>
        <li className={style.li}><Link href='#' className={style.link}>contacto</Link></li>
      </ul>
    </nav>
  )
}
