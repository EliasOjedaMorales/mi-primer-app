import '../styles/normalize.css'
import { Roboto } from '@next/font/google'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'
import Clock from '../components/Clock'
import Weather from '../components/Wheather'

const fuenteRoboto = Roboto({
  weight: ['100', '300', '500', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={fuenteRoboto.className}>
        <NavBar />
        <Clock />
        <Weather />
        {children}
        <FooterBar />
      </body>
    </html>
  )
}
