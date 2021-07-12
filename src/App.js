import React from 'react'
import { useEffect, useState } from 'react'
import GetDate from './components/converters/GetDate'
import DailyWeather from './components/DailyWeather'
import HourChart from './components/HourChart'

function App() {
  var d = new Date()
  const [data, setData] = useState(undefined)
  const [hourly, setHourly] = useState(GetDate((d.getTime())/1000))
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude
      var long = position.coords.longitude
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=alerts,minutely&appid=29c7a53dbed814effac1da056c8993eb&units=metric&lang=en`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result)
      })
    });
      
  }, [setData])

  const updateHourly = (day) => {
    setHourly(day)
  }

  return (
    <div className="App">
      
      <div className='dailyWeatherWrapper'>
        {(data !== undefined && data.cod !== '400') ? (
            <DailyWeather dailyWeatherList={data.daily} showHourly={updateHourly}/>
        ) : (<div/>)}
      </div>  

      <div className='dailyWeatherWrapper'>
        {(data !== undefined && data.cod !== '400') ? (
          <HourChart weatherList={data.hourly} current={hourly}/>
        ) : (<div/>)}
      </div>
    

    </div>
  )
}

export default App;
