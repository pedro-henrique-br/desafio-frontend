import { ThemeProvider, BaseStyles } from '@primer/react'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
>>>>>>> 8da542a (old)
import { WeatherContainer } from './assets/components/WeatherContainer'
import { WeatherTable } from './assets/components/WeatherTable'
import './App.css'

function App() {
  
  return (
    <ThemeProvider>
    <BaseStyles>
      <div className='app'>
        <h1 className='title'>Previsão do tempo</h1>
<<<<<<< HEAD
      <WeatherContainer />
=======
      <WeatherContainer getWeatherData={data}/>
      <WeatherInput />
>>>>>>> 8da542a (old)
      <WeatherTable />
      </div>
    </BaseStyles>
  </ThemeProvider>
  )
}

export default App
