import { ThemeProvider, BaseStyles } from '@primer/react'
import { WeatherInput } from './assets/components/WeatherInput'
import { WeatherContainer } from './assets/components/WeatherContainer'
import { WeatherTable } from './assets/components/WeatherTable'
import { useState } from 'react'
import './App.css'

function App() {

  const [displayValue, setDisplayValue] = useState("")
  
  const handleInputChange = (newValue) => {
    setDisplayValue(newValue);
  };

  return (
    <ThemeProvider>
    <BaseStyles>
      <div className='app'>
        <h1 id='title'>Previsão do tempo</h1>
      {displayValue ? (<WeatherContainer value={displayValue}/>) : (null)}
      <WeatherInput onInputChange={handleInputChange}/>
      <WeatherTable />
      </div>
    </BaseStyles>
  </ThemeProvider>
  )
}

export default App
