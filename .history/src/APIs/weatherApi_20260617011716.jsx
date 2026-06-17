import axios from "axios"
function weatherDescribtion(code) {
    switch (code) {
        case 0:
        return "Clear sky";
        case 1:
        return "Mainly clear";
        case 2:
        return "Partly cloudy";
        case 3:
        return "Overcast";
        case 45:
        case 48:
        return "Fog";
        case 51:
        case 53:
        case 55:
        return "Drizzle";
        case 61:
        case 63:
        case 65:
        return "Rain";
        case 71:
        case 73:
        case 75:
        return "Snow";
        case 95:
        return "Thunderstorm";
        default:
        return "Unknown";
    }
    }

export default async function GetWeather(city){
    const coords= {lon:city.lon,lat:city.lat}
    const URL =`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code`
    
    let data;
    await axios.get(URL, {
    })
    .then((response) => {
    console.log(response);
    data={temp:response.data.current.temperature_2m,
        max:response.data.daily.temperature_2m_max[0],
        min:response.data.daily.temperature_2m_min[0],
        describtion:weatherDescribtion(response.data.current.weather_code),
        icon:getWeatherEmoji(response.data.current.weather_code)
    }
    console.log(data)
    
    })
    .catch((error) => {
    console.error(error);
    })
    return data;
}