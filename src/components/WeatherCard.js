import GetDate from "./converters/GetDate"
import WeatherIcon from "./converters/WeatherIcon"
import { WiThermometer } from "react-icons/wi"
import { WiHumidity } from "react-icons/wi"

const WeatherCard = ({weather, showHourly}) => {
    return (
        <a onClick={() => showHourly(GetDate(weather.dt))} href="#">
        <div className='card'>
        <h1>{GetDate(weather.dt)}</h1>
        
        <h3><WiThermometer/>{weather.temp.day}</h3>
        <h4>Feels like:  {weather.feels_like.day}</h4>
        <h3><WiHumidity/>{weather.humidity}</h3>
        
        <h3>{WeatherIcon(weather.weather[0].id)} {weather.weather[0].description}</h3>
        </div>
        </a>
    )
}




export default WeatherCard
