const WeatherCard = (weather) => {
    console.log(weather)
    return (
        <a href='/'>
        <div className='card'>
        <h1>Tempature: {weather.weather.temp.day}</h1>
        <h1>Tempature feels like: {weather.weather.feels_like.day}</h1>
        <h1>Humidity: {weather.weather.humidity}</h1>
        <h1>Weather: {weather.weather.weather[0].description}</h1>
        </div>
        </a>
    )
}




export default WeatherCard
