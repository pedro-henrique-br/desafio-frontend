import { ThemeProvider, BaseStyles } from '@primer/react'
import { useEffect, useState } from 'react'
import { WeatherContainer } from './assets/components/WeatherContainer'
import { WeatherTable } from './assets/components/WeatherTable'
import './App.css'

function App() {
  
  return (
    <ThemeProvider>
    <BaseStyles>
      <div className='app'>
        <h1 className='title'>Previsão do tempo</h1>
      <WeatherContainer />
      <WeatherTable />
      </div>
    </BaseStyles>
  </ThemeProvider>
  )
}

export default App
