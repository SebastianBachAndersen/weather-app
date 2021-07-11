import React from 'react'
import HourlyWeatherCard from './HourlyWeatherCard'
import WeatherCard from './WeatherCard'

const HourlyWeather = ( {HourlyWeatherList} ) => {
    return (
        <div>
            {HourlyWeatherList.map((weatherdata, index) => (
                <HourlyWeatherCard key={index} weather={weatherdata}/>
            ))}
        </div>
    )
}

export default HourlyWeather
