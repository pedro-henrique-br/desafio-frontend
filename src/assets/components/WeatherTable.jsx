import './WeatherTable.css'
import { getWeatherByCapital } from '../../api/Api'
import { useEffect, useState } from 'react'

export const WeatherTable = () => {

  const [capital, setCapital] = useState("")
  
  const city = "São Paulo"

  const weather = async (...cities) => {
    const data = await getWeatherByCapital(cities)
    setCapital(data)
    return data
  }
  
  useEffect(() => {
    weather(city)
  },[])


  return (
    <div className="weather-table">
      <div className="title"><h1>Capitais</h1></div>
      <div className="container">
        <p><span>Min Máx</span></p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p><span>Min Máx</span></p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
        <p>18° 29° Rio de Janeiro</p>
      </div>
    </div>
  )
}
