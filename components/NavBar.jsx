import Link from 'next/link'
import style from '../styles/NavBar.module.css'
const Links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}
]
export default function NavBar () {
  return (
    <header className={style.container}>
      <nav className={style.container_items}>
        {Links.map(({ label, route }) => (
          <Link href={route} key={route} className={style.item}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
