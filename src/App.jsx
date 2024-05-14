import './App.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import { useEffect } from 'react'
import { WeatherContainer } from './assets/components/WeatherContainer'
import { WeatherInput } from './assets/components/WeatherInput'
import { WeatherTable } from './assets/components/WeatherTable'

const url = ('http://api.weatherapi.com/v1/current.json?key=f9aef99e8fe645c5b5c203352241305&q=Brazil&days=5')

function App() {

  useEffect(() => {
    async function getWeatherData () {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
    getWeatherData()
  })

  return (
  <ThemeProvider>
    <BaseStyles>
      <div className='app'>
        <h1 className='title'>Previsão do tempo</h1>
      <WeatherContainer />
      <WeatherInput />
      <WeatherTable />
    </div>
    </BaseStyles>
  </ThemeProvider>
  )
}

export default App
