'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Weather () {
  const [weather, setWeather] = useState()
  const ClientId = 'wDj177TVi13lw9fVQT07a'
  const ClientSecret = 'U5b0ps8Ij2D9q6FXoXb06tO1xNXs58ygf2CZkrJs'

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
    <div>
      {weather
        ? (
          <div>
            <p>Temperatura: {weather.tempC}°C</p>
            <p>Clima: {weather.weather}</p>
          </div>
          )
        : (
          <p>Loading...</p>
          )}
    </div>
  )
}

export default Weather
