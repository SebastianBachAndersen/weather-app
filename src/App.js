import React from 'react'
import { useEffect, useState } from 'react'
import DailyWeather from './components/DailyWeather'
import HourlyWeatherCard from './components/HourlyWeatherCard'
import WeatherCard from './components/WeatherCard'
import HourlyWeather from './components/HourlyWeather'

function App() {

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const fetchWeatherData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      });
      //TODO: lav til seperat komponent
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=alerts,minutely&appid=29c7a53dbed814effac1da056c8993eb&units=metric&lang=en`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result)
      })
    }
    fetchWeatherData()
  }, [lat, long])

  return (
    <div className="App">
      
      <div className='dailyWeatherWrapper'>
      {(data.length !== 0 && data.cod !== '400') ? (
          <DailyWeather dailyWeatherList={data.daily}/>
      ): (
        <div></div>
      )}
    </div>  
    <div className='dailyWeatherWrapper'>
      {(data.length !== 0 && data.cod !== '400') ? (
          <HourlyWeather HourlyWeatherList={data.hourly}/>
      ): (
        <div></div>
      )}
    </div>

    </div>
  );
}

export default App;
