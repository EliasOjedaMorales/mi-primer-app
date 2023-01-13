import '../styles/normalize.css'
import { Roboto } from '@next/font/google'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'

const fuenteRoboto = Roboto({
  weight: ['100', '300', '500', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={fuenteRoboto.className}>
        <NavBar />
        {children}
        <FooterBar />
      </body>
    </html>
  )
}
