import './App.css'
import { ThemeProvider, BaseStyles } from '@primer/react'
import { useEffect } from 'react'
import { WeatherContainer } from './assets/components/WeatherContainer'
import { WeatherInput } from './assets/components/WeatherInput'
import { WeatherTable } from './assets/components/WeatherTable'

function App() {
  
  return (

    <ThemeProvider>
    <BaseStyles>
      <div className='app'>
        <h1 className='title'>Previsão do tempo</h1>
        <div>
          {/* {isWeatherInput 
            ? <WeatherContainer />
            : ('')} */}
        </div>
      <WeatherInput />
      <WeatherTable />
      </div>
    </BaseStyles>
  </ThemeProvider>
  )
}

export default App
