import "./WeatherTable.css";
import { getWeatherByCapital } from "../../api/Api";
import { useEffect, useState } from "react";

export const WeatherTable = () => {
  const [capital, setCapital] = useState("");

  const cities = [
    "Rio de janeiro",
    "São paulo",
    "Belo Horizonte",
    "Brasília",
    "Belém",
    "Salvador",
    "Curitiba",
    "Fortaleza",
    "Manaus",
    "Joao Pessoa",
  ];

  const weather = async () => {
    const data = await getWeatherByCapital(cities);
    setCapital(data);
  };

  useEffect(() => {
    weather();
  }, []);

  const cidade = capital

  return (
    <>
    {capital ? (<div className="weather-table">
      <div className="title">
        <h1>Capitais</h1>
        </div>
        <div className="container">
          <ul>
            <span>Min Máx</span>
            <li>
              <p>
                <span>{cidade[0].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[0].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[0].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[1].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[1].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[1].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[2].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[2].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[2].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[3].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[3].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[3].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[4].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[4].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[4].location.name}
              </p>
            </li>
          </ul>
          <ul>
            <span id="min-max">Min Máx</span>
            <li>
              <p>
                <span>{cidade[5].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[5].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[5].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[6].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[6].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[6].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[7].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[7].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[7].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[8].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[8].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[8].location.name}
              </p>
            </li>
            <li>
              <p>
                <span>{cidade[9].forecast.forecastday[0].day.mintemp_c.toFixed()}° {cidade[9].forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span>{cidade[9].location.name}
              </p>
            </li>
          </ul>
        </div>
      </div>) : (null)}
    
      </>
  );
};
