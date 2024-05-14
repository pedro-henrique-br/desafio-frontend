import './WeatherContainer.css'
import {ThemeProvider, BaseStyles} from '@primer/react'
import {ArrowUpIcon} from '@primer/octicons-react'
import {ArrowDownIcon} from '@primer/octicons-react'
import {XIcon} from '@primer/octicons-react'

export const WeatherContainer = () => {
  return (
  <ThemeProvider>
    <BaseStyles>
      <div className="weather-container">
        <div className="title-container">
        <h3>Niterói, Rj - Brasil</h3>
        <div className="close-button-container">
        <button>
          <XIcon size={35} fill='rgb(210, 134, 4)'/>  
        </button>
        </div>
        </div>
        <h1>20°C Nublado</h1>
        <div className="temperature-container">
          <p>
            <ArrowDownIcon size={30} fill='rgb(210, 134, 4)'/>
          <span>
            16°
          </span>
            <ArrowUpIcon size={30} fill='rgb(210, 134, 4)' />
          <span>
            25°
          </span>
          </p>
            <p>Sensação <span>19°C</span></p>
            <p>Vento <span>18km/h</span></p>
            <p>Humidade <span>89%</span></p>
        </div>
        <div className="near-weathers-container">
          <div className="day-1">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-2">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-3">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-4">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
          <div className="day-5">
            <p>Terça</p>
            <p>18°29°</p>
          </div>
        </div>
      </div>
      </BaseStyles>
  </ThemeProvider>
  )
}
