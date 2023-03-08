import style from '../styles/AboutMe.module.css'
import Image from 'next/image'
import foto from '../public/Nieve.jpg'
import fotito from '../public/fotito.png'
import robotito from '../public/robotposando.jpg'

export default function AboutMe () {
  return (
    <main className={style.container}>
      <h3 className={style.title}>Sobre mi</h3>
      <div className={style.description}>
        <p className={style.words}>Soy un apasionado de la tecnologia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo vero voluptas sint, explicabo cupiditate eveniet, quia, eaque culpa earum pariatur necessitatibus fugit vel minima harum voluptatibus possimus laboriosam error quasi?</p>
        <Image src={robotito} alt='Es una foto de un robot' className={style.image} />
      </div>
      <div className={style.description}>
        <p className={style.words}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo vero voluptas sint, explicabo cupiditate eveniet, quia, eaque culpa earum pariatur necessitatibus fugit vel minima harum voluptatibus possimus laboriosam error quasi?</p>
        <Image src={fotito} alt='Es una foto de un robot' className={style.image} />
      </div>
      <div className={style.description}>
        <p className={style.words}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae asperiores debitis ea recusandae eaque earum voluptatem assumenda, odit in veniam doloremque. Accusamus ab in nulla reprehenderit minima nostrum fuga! , ipsum dolor sit amet consectetur adipisicing elit. Quo vero voluptas sint, explicabo cupiditate eveniet, quia, eaque culpa earum pariatur necessitatibus fugit vel minima harum voluptatibus possimus laboriosam error quasi?</p>
        <Image src={foto} alt='Es una foto de un robot' className={style.image} />
      </div>
    </main>
  )
}
