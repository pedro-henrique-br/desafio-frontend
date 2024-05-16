import './WeatherInput.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import { BiSearchAlt } from 'react-icons/bi'
import { useState} from 'react'

export const WeatherInput = ({onInputChange}) => {

  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    onInputChange(city)
    setCity("")
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
            value={city}
            type="text"
            placeholder="Insira o nome da cidade"
            onChange={(e) => setCity(e.target.value)}>          
          </input>
          </label>
        </form>
      </div>
      </BaseStyles>
    </ThemeProvider>
  );
};

