import './WeatherTable.css'
import { getWeatherByCapital } from '../../api/Api'
import { useEffect, useState } from 'react'

export const WeatherTable = () => {

  const [capital, setCapital] = useState("")
  
  const city = "São Paulo"
  
  const weather = async (...cities) => {
    const data = await getWeatherByCapital(cities)
    setCapital(data)
  }
  
  useEffect(() => {
    weather(city)
  },[])


  return (
    <div className="weather-table">
      <div className="title"><h1>Capitais</h1></div>
      <div className="container">
        <ul>
          <span>Min Máx</span>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
        </ul>
        <ul>
          <span>Min Máx</span>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
          <li><p><span>18° 29°</span> Rio de Janeiro</p></li>
        </ul>
        
      </div>
    </div>
  )
}
