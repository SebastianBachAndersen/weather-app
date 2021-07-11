
const HourlyWeatherCard = (weather) => {
    const dt = new Date(weather.weather.temp*1000).toLocaleTimeString('en-IN')
    return (
        <a>
        <div className='card'>
        <p>Tempature: {dt}</p>
        <p>Tempature feels like: {weather.weather.feels_like}</p>
        <p>Humidity: {weather.weather.humidity}</p>
        <p>Weather: {weather.weather.pressure}</p>
        </div>
        </a>
    )
}




export default HourlyWeatherCard