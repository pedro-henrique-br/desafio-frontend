import axios from 'axios'

const TOKEN_API = "f9aef99e8fe645c5b5c203352241305"

const url = `http://api.weatherapi.com/v1/forecast.json?key=${TOKEN_API}&lang=pt&q=`

export const apiWeather = axios.create({
    baseURL: url,
})

export const getWeatherByCity = (city) => 
    apiWeather.get(`${city}&days=5&aqi=no&alerts=no`).then((response) => response.data)

export const getWeatherByCapital = async(capitalList) => {
    const weatherDataPromise = capitalList.map((capital) => apiWeather.get(`${capital}&days=1`).then((response) => response.data))
    const data = await Promise.all(weatherDataPromise)
    return data
}
