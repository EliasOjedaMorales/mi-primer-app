import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import style from '../styles/FooterBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import AerisLogo from '../public/ElCosoDeClima.png'
import EGOM from '../public/logoWix.jpg'

const FooterBar = () => (
  <footer className={style.footer}>
    <div className={style.footer_egom}>
      <Image src={EGOM} alt='logo EGOM' width='50' height='50' className={style.egom} />
    </div>
    <div className={style.footer__links}>
      <Link href='https://instagram.com/' className={style.link}><FaInstagram className={style.insta} /></Link>
      <Link href='https://github.com/' className={style.link}><FaGithub className={style.git} /></Link>        <Link href='mailto:gabriel4081@outlook.es' className={style.link}><FaEnvelope className={style.mail} /></Link>
      <Link href='https://linkedin.com/' className={style.link}><FaLinkedin className={style.linkedin} /></Link>
    </div>
    <div className={style.footer__powered}>
      <p>Powered by <Link href='https://aerisweather.com' className={style.powLink}>AerisWeather</Link></p>
      {/* <Link href='https://aerisweather.com'><Image src={AerisLogo} alt='Logo de AerisWeather' width='50' height='50' className={style.Image} /></Link> */}
    </div>
  </footer>
)

export default FooterBar
