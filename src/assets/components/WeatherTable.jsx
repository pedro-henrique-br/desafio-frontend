import './WeatherTable.css'
import { getWeatherByCapital } from '../../api/Api'

export const WeatherTable = () => {
  
  const city = "são paulo"

  const weather = async (city) => {
    const data = await getWeatherByCapital(city)
    console.log(data.location.name)
    return data
  }

  weather(city)


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
