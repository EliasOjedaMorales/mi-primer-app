'use client'
import { useState } from 'react'

function Clock () {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div>
      <h1>La hora es : {time}</h1>
    </div>
  )
}

export default Clock
