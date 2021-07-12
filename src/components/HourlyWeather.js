import React from 'react'
import GetDate from './converters/GetDate'
import HourlyWeatherCard from './HourlyWeatherCard'

const HourlyWeather = ( {HourlyWeatherList, current} ) => {
    console.log(current)
    return (
        <div>
            {HourlyWeatherList.filter(weatherdata => GetDate(weatherdata.dt) === current)
            .map(weatherdata => (  
                <HourlyWeatherCard weather={weatherdata}/>
            ))}
        </div>
        
    )
}

export default HourlyWeather
