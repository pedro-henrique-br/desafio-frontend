import './WeatherInput.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import { BiSearchAlt } from 'react-icons/bi'
import { useState} from 'react'

export const WeatherInput = (getWeatherData) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [search, setSearch] = useState("")

  const TOKEN_API = "f9aef99e8fe645c5b5c203352241305";

  async function getWeatherData(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN_API}&q=${city}&days=5&aqi=no&alerts=no`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }


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
  );
};
