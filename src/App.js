import React from 'react'
import { useEffect, useState } from 'react'
import GetDate from './components/converters/GetDate'
import DailyWeather from './components/DailyWeather'
import HourlyWeather from './components/HourlyWeather'

function App() {
  var d = new Date()
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  const [hourly, setHourly] = useState(GetDate((d.getTime())/1000))
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

  const updateHourly = (day) => {
    setHourly(day)
  }

  return (
    <div className="App">
      
      <div className='dailyWeatherWrapper'>
      {(data.length !== 0 && data.cod !== '400') ? (
          <DailyWeather dailyWeatherList={data.daily} showHourly={updateHourly}/>
      ): (
        <div></div>
      )}
    </div>  
    <div className='dailyWeatherWrapper'>
      {(data.length !== 0 && data.cod !== '400') ? (
          <HourlyWeather HourlyWeatherList={data.hourly} current={hourly}/>
      ): (
        <div></div>
      )}
    </div>

    </div>
  );
}

export default App;
