import '../styles/normalize.css'
import { Montserrat_Alternates } from '@next/font/google'
import FooterBar from '../components/FooterBar'
import Menu from '../components/MenuAside'
import ToTopButton from '../components/ToTopButton'

const fuenteRoboto = Montserrat_Alternates({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin1', 'cyrillic']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={fuenteRoboto.className}>
        <Menu />
        {children}
        <ToTopButton />
        <FooterBar />
      </body>
    </html>
  )
}
