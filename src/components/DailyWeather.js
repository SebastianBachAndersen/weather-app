import GetDay from './converters/GetDate'
import WeatherCard from './WeatherCard'

const DailyWeather = ({ dailyWeatherList, showHourly }) => {
    console.log(dailyWeatherList)
    return (
        <>
            {dailyWeatherList.map((weatherdata, index) => (
                <WeatherCard key={GetDay(weatherdata.dt)} weather={weatherdata} showHourly={showHourly}/>
            ))}
            
        </>
    )
}

export default DailyWeather
