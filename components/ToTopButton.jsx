'use client'
import { useState, useEffect } from 'react'
import style from '../styles/ToTopButton.module.css'
import { FaArrowCircleUp } from 'react-icons/fa'

export default function ToTop () {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className={style.button}><FaArrowCircleUp className={style.upArrow} /></button>
      )}
    </div>
  )
}
