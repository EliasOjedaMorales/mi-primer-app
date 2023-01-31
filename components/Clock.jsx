'use client'
import { useState } from 'react'
import '../styles/Clock.css'

function addZeros (num) {
  const zeros = num < 10 ? ('0' + num) : num
  return zeros
}

function Clock () {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [seconds, setSeconds] = useState(new Date().getSeconds())
  const [day, setDay] = useState(new Date().getDay())
  const [date, setDate] = useState(new Date().getDate())
  const [month, setMonth] = useState(new Date().getMonth())
  const week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  setInterval(() => {
    setSeconds(new Date().getSeconds())
    setHours(new Date().getHours())
    setMinutes(new Date().getMinutes())
    setDay(new Date().getDay())
    setDate(new Date().getDate())
    setMonth(new Date().getMonth())
  }, 1000)

  return (
    <div className='clock'>
      <div className='digits neon'>
        <div className='digit'>{addZeros(hours)} : {addZeros(minutes)} : {addZeros(seconds)}</div>
      </div>
      <div className='curentDate'>
        <div className='weekday'>{week[day]}, {addZeros(date)} de {months[month]}</div>
      </div>
    </div>

  )
}
export default Clock
