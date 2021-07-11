import WeatherCard from './WeatherCard'

const DailyWeather = ({ dailyWeatherList }) => {
    console.log(dailyWeatherList)
    return (
        <>
            {dailyWeatherList.map((weatherdata, index) => (
                <WeatherCard key={index} weather={weatherdata}/>
            ))}
            
        </>
    )
}

export default DailyWeather
