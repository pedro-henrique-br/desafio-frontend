import {ThemeProvider, BaseStyles} from '@primer/react'
import './WeatherInput.css'
import { BiSearchAlt } from 'react-icons/bi'

export const WeatherInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
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
          value={"Insira aqui o nome da cidade"}
          >          
          </input>
          </label>
        </form>
      </div>
      </BaseStyles>
    </ThemeProvider>
  )
}
