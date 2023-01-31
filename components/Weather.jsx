'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './Loader'
import '../styles/Weather.css'

function Weather () {
  const [weather, setWeather] = useState()
  const ClientId = 'wDj177TVi13lw9fVQT07a'
  const ClientSecret = 'U5b0ps8Ij2D9q6FXoXb06tO1xNXs58ygf2CZkrJs'
  // const defaultLatitude = -34.62844450403586
  // const defaultLongitude = -58.39174728796408

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const { data } = await axios.get(
          `https://api.aerisapi.com/observations/closest?p=${position.coords.latitude},${position.coords.longitude}&client_id=${ClientId}&client_secret=${ClientSecret}`
        )
        setWeather(data.response[0].ob)
      },
      error => {
        console.log(error)
      }
    )
  }, [])

  return (
    <div className='container'>
      {weather
        ? (
          <div className='containerData'>
            <p className='data temperatura'>{weather.tempC}°C {weather.weather}</p>
            <p className='data humedad'>Humeda {weather.humidity}%</p>
          </div>
          )
        : (
          <Loading className='loader' />
          )}
    </div>
  )
}

export default Weather
