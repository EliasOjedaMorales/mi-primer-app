import Link from 'next/link'
import style from '../styles/FooterBar.module.css'
import * as Unicons from '@iconscout/react-unicons'

const linkedin = 'https://www.linkedin.com/in/elias-gabriel-ojeda-morales/'
const github = 'https://www.github.com'
const insta = 'https://www.instagram.com'

export default function FooterBar () {
  return (
    <footer className={style.container}>
      <nav className={style.container_items}>
        <Link href={github} className={style.items}>
          <Unicons.UilGithubAlt size='50' color='rgba(55%, 15%, 63%)' />
        </Link>
        <Link href={linkedin} className={style.items}>
          <Unicons.UilLinkedinAlt size='50' color='rgba(55%, 15%, 63%)' />
        </Link>
        <Link href={insta} className={style.items}>
          <Unicons.UilInstagram size='50' color='rgba(55%, 15%, 63%)' />
        </Link>
      </nav>
      <h3 className={style.iconsBy}>React Unicons by <a href='https://iconscout.com/' className={style.iconsByL}>Iconscout</a></h3>
    </footer>
  )
}
