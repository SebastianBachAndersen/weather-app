import { WiDaySunny, WiCloudy, WiWindy, WiDaySnow, WiRain, WiDayRain, WiThunderstorm } from "react-icons/wi"


const WeatherIcon = (id) => {
    console.log(id)
    
    switch (id) {
        case id === 800:
            return <WiDaySunny/>

        case id >= 200 && id <= 232:
            return <WiThunderstorm/>  

        case id >= 300 && id <= 321:
            return <WiDayRain/>   
        
        case id >= 500 && id <= 531:
            return <WiRain />
    
        case id >= 600 && id <= 622:
            return <WiDaySnow/>
    
        case id >= 701 && id <= 781:
            return <WiWindy/>
    
        case id >= 801 && id <= 804:
            return <WiCloudy/>
    
        default:
            return <WiDaySunny/>
    }
}

export default WeatherIcon
