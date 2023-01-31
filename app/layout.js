import '../styles/normalize.css'
import { Roboto } from '@next/font/google'
import FooterBar from '../components/FooterBar'
import Menu from '../components/MenuAside'

const fuenteRoboto = Roboto({
  weight: ['100', '300', '500', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={fuenteRoboto.className}>
        <Menu />
        {children}
        <FooterBar />
      </body>
    </html>
  )
}
