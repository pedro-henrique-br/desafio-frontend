import './WeatherContainer.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import {ArrowUpIcon} from '@primer/octicons-react'
import {ArrowDownIcon} from '@primer/octicons-react'
import {XIcon} from '@primer/octicons-react'
import { getWeatherByCity } from '../../api/Api'
import { useState , useEffect } from 'react'
import { WeatherInput } from './WeatherInput'

export const WeatherContainer = ({value}) => {

  const [weatherData, setWeatherData] = useState("")
 
  const weather = async (city) => {
    const data = await getWeatherByCity(city)
    setWeatherData(data)
  }
  
  useEffect(() => {
    weather(value)
  },[value])


  const location = weatherData.location

  const current = weatherData.current

  const forecast = weatherData.forecast
  

  return (
  <ThemeProvider>
    <BaseStyles>
        {weatherData ? (
        <div className="weather-container">
        <div className="title-container">
        <h3>{location.name}, {location.region} - {location.country}</h3>
        <div className="close-button-container">
        <button>
          <XIcon size={35} fill='rgb(210, 134, 4)'/>  
        </button>
        </div>
        </div>
        <h1>{current.temp_c}°C {current.condition.text}</h1>
        <div className="temperature-container">
          <p>
            <ArrowDownIcon size={30} fill='rgb(210, 134, 4)'/>
          <span>
            {forecast.forecastday[0].day.mintemp_c}°
          </span>
            <ArrowUpIcon size={30} fill='rgb(210, 134, 4)' />
          <span>
          {forecast.forecastday[0].day.maxtemp_c}°°
          </span>
          </p>
            <p>Sensação <span>{current.feelslike_c}°C</span></p>
            <p>Vento <span>{current.wind_kph}kph</span></p>
            <p>Humidade <span>{current.humidity}%</span></p>
        </div>
        <div className="near-weathers-container">
          <div className="day-1">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-2">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-3">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-4">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-5">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
        </div>
      </div>) : null}
      <WeatherInput onInputChange={value} />
      </BaseStyles>
  </ThemeProvider>
  )
}
