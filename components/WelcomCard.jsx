import style from '../styles/WelcomeCard.module.css'

export default function WelcomeCard () {
  return (
    <section className={style.container}>
      <main className={style.words}>
        <h2 className={style.wordWelcome}>Bienvenidos, soy</h2>
        <h1 className={style.wordName}><span>E</span>lias <span>G</span>abriel <span>O</span>jeda <span>M</span>orales</h1>
        <h3 className={style.wordWork}>Desarrollador Web</h3>
      </main>
    </section>
  )
}
