'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useState } from 'react'
import Image from 'next/image'
import '../styles/Card.css'

export default function Card ({ image, progress, progressColor }) {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(!hovered)
  }
  return (
    <div onMouseEnter={handleHover} onClick={handleHover} onMouseLeave={handleHover} className='container'>
      <Image src={image} alt='Descripción de la imagen' className='image' />
      {hovered && (
        <div className='circular-progress'>
          <CircularProgressbar
            className='progress-bar'
            value={progress}
            strokeWidth={4}
            styles={buildStyles({
              strokeLinecap: 'round',
              pathColor: progressColor,
              trailColor: '#ccc'
            })}
          />
        </div>
      )}
    </div>

  )
}
