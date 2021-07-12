import GetDate from "./converters/GetDate"
import WeatherIcon from "./converters/WeatherIcon"
import { WiThermometer } from "react-icons/wi"
import { WiHumidity } from "react-icons/wi"

const WeatherCard = ({weather, showHourly}) => {
    return (
        <a onClick={() => showHourly(GetDate(weather.dt))}>
        <div className='card'>
        <h1>{GetDate(weather.dt)}</h1>
        
        <h3><WiThermometer/>{weather.temp.day}</h3>
        <h4>Tempature feels like: {weather.feels_like.day}</h4>
        <h3><WiHumidity/>{weather.humidity}</h3>
        {WeatherIcon(weather.weather[0].id)}
        <span> {weather.weather[0].description}</span>
        </div>
        </a>
    )
}




export default WeatherCard
