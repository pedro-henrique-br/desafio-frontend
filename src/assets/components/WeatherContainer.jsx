import "./WeatherContainer.css";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { ArrowUpIcon } from "@primer/octicons-react";
import { ArrowDownIcon } from "@primer/octicons-react";
import { XIcon } from "@primer/octicons-react";
import { getWeatherByCity } from "../../api/Api";
import { useState, useEffect } from "react";

export const WeatherContainer = ({ value }) => {
  const [weatherData, setWeatherData] = useState("");

  const closeWeatherContainer = () => {
    setWeatherData("");
  };

  const weather = async (city) => {
    const data = await getWeatherByCity(city);
    setWeatherData(data);
  };

  useEffect(() => {
    weather(value);
  }, [value]);

  const location = weatherData.location;

  const current = weatherData.current;

  const forecast = weatherData.forecast;

  function nextFewDays(timeInString) {
    var formatedTime = timeInString.split("-");
    var day = parseInt(formatedTime[0], 10);
    var month = parseInt(formatedTime[1], 10) - 1;
    var year = parseInt(formatedTime[2], 10);

    var data = new Date(day, month, year);
    var daysOfTheWeek = data.getDay();
    var daysName = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    return daysName[daysOfTheWeek];
  }

  return (
    <ThemeProvider>
      <BaseStyles>
        {weatherData ? (
          <div className="weather-container">
            <div className="title-container">
              <h3>
                {location.name}, {location.region} - {location.country}
              </h3>
              <div className="close-button-container">
                <button onClick={closeWeatherContainer}>
                  <XIcon size={25} fill="rgb(210, 134, 4)" />
                </button>
              </div>
            </div>
            <h1>
              {current.temp_c.toFixed()}°C {current.condition.text}
            </h1>
            <div className="temperature-container">
              <p>
                <ArrowDownIcon size={20} fill="rgb(210, 134, 4)" />
                <span>{forecast.forecastday[0].day.mintemp_c.toFixed()}°</span>
                <ArrowUpIcon size={20} fill="rgb(210, 134, 4)" />
                <span>{forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>
              </p>
              <p>
                Sensação <span>{current.feelslike_c.toFixed()}°C</span>
              </p>
              <p>
                Vento <span>{current.wind_kph.toFixed()}km/h</span>
              </p>
              <p>
                Humidade <span>{current.humidity.toFixed()}%</span>
              </p>
            </div>
            <div className="near-weathers-container">
              <div className="day-1">
                <p>
                  {nextFewDays(forecast.forecastday[0].date).split("-feira")}
                </p>
                <p>
                  <span>
                    {forecast.forecastday[0].day.mintemp_c.toFixed()}°{" "}
                    {forecast.forecastday[0].day.maxtemp_c.toFixed()}°
                  </span>
                </p>
              </div>
              <div className="day-2">
                <p>
                  {nextFewDays(forecast.forecastday[1].date).split("-feira")}
                </p>
                <p>
                  <span>
                    {forecast.forecastday[1].day.mintemp_c.toFixed()}°{" "}
                    {forecast.forecastday[1].day.maxtemp_c.toFixed()}°
                  </span>
                </p>
              </div>
              <div className="day-3">
                <p>
                  {nextFewDays(forecast.forecastday[2].date).split("-feira")}
                </p>
                <p>
                  <span>
                    {forecast.forecastday[2].day.mintemp_c.toFixed()}°{" "}
                    {forecast.forecastday[2].day.maxtemp_c.toFixed()}°
                  </span>
                </p>
              </div>
              <div className="day-4">
                <p>
                  {nextFewDays(forecast.forecastday[3].date).split("-feira")}
                </p>
                <p>
                  <span>
                    {forecast.forecastday[3].day.mintemp_c.toFixed()}°{" "}
                    {forecast.forecastday[3].day.maxtemp_c.toFixed()}°
                  </span>
                </p>
              </div>
              <div className="day-5">
                <p>
                  {nextFewDays(forecast.forecastday[4].date).split("-feira")}
                </p>
                <p>
                  <span>
                    {forecast.forecastday[4].day.mintemp_c.toFixed()}°{" "}
                    {forecast.forecastday[4].day.maxtemp_c.toFixed()}°
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </BaseStyles>
    </ThemeProvider>
  );
};
