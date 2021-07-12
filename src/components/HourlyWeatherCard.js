import EpochToHour from './converters/EpochToHour'

const HourlyWeatherCard = ({weather}) => {
    return (
        <a>
        <div className='card'>
        <h2>Tempature: {EpochToHour(weather.dt)}</h2>
        <p>Tempature feels like: {weather.feels_like}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Weather: {weather.pressure}</p>
        </div>
        </a>
    )
}




export default HourlyWeatherCard