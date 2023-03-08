import Card from './Card'
import logoJS from '../public/logoJS.png'
import logoCSS from '../public/logoCSS2.svg.png'
import logoHTML from '../public/logoHTML.png'
import logoGit from '../public/logoGit.png'
import logoNextJS from '../public/logoNextJS.png'
import '../styles/Skills.css'

export default function Skills () {
  return (
    <div className='container'>
      <div className='item'>
        <Card image={logoJS} progress={65} progressColor='#E6CA0B' />
        <p>JavaScript</p>
      </div>
      <div className='item'>
        <Card image={logoCSS} progress={65} progressColor='#264DE4' />
        <p>CSS</p>
      </div>
      <div className='item'>
        <Card image={logoHTML} progress={65} progressColor='#E65200' />
        <p>HTML</p>
      </div>
      <div className='item'>
        <Card image={logoGit} progress={65} progressColor='#EF3C2D' />
        <p>Git</p>
      </div>
      <div className='item'>
        <Card image={logoNextJS} progress={65} progressColor='#000' />
        <p>Next.js</p>
      </div>
    </div>
  )
}
