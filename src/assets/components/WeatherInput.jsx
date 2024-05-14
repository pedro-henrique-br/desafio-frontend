import {ThemeProvider, BaseStyles} from '@primer/react'
import './WeatherInput.css'
import { BiSearchAlt } from 'react-icons/bi'
import { useState , useEffect } from 'react'
import axios from 'axios'

export const WeatherInput = () => {

  useEffect(() => {
    const TOKEN_API = "f9aef99e8fe645c5b5c203352241305"
    
    async function getWeatherData (search) {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN_API}&q=${search}&days=5&aqi=no&alerts=no`)
        const data = response.data
        console.log(data)
        return data
      } catch (error) {
        console.log(error)
      }
    }
    getWeatherData(search)
})

  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch("")
  }
  
  return (
    <ThemeProvider>
      <BaseStyles>  
      <div className="weather-input">
        <form action="submit">
          <label className='wrapper'>
          <div className='icon'>
            <button onClick={handleSubmit}><BiSearchAlt size={26}></BiSearchAlt></button>
          </div>
          <input
            search={search}
            type="text"
            placeholder="Insira o nome da cidade"
            onChange={(e) => setSearch(e.target.value)}
            >          
          </input>
          </label>
        </form>
      </div>
      </BaseStyles>
    </ThemeProvider>
  )
}
