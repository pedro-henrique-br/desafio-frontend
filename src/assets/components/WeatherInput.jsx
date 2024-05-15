import './WeatherInput.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import { BiSearchAlt } from 'react-icons/bi'
import { useState} from 'react'

export const WeatherInput = () => {

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
