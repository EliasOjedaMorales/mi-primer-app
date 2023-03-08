'use client'

import { useState } from 'react'
import Image from 'next/image'
import '../styles/FachaDelCarrucel.css'

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleMouseEnter = (index) => {
    setActiveIndex(index)
  }

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='carousel'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`image ${index === activeIndex ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index)}
        >
          <Image src={image.src} alt={image.title} className='content' width='350' height='200' />
          <div className='overlay'>
            <h3>{image.title}</h3>
            {index === activeIndex && (
              <div className='expanded'>
                <p>{image.description}</p>
                <p>{image.details}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel
