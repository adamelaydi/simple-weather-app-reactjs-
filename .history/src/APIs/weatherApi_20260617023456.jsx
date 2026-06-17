import axios from "axios"

function getWeatherEmoji(code) {
    switch (code) {
        case 0:
        return "☀️"; // clear sky

        case 1:
        case 2:
        return "🌤️"; // partly cloudy

        case 3:
        return "☁️"; // cloudy

        case 45:
        case 48:
        return "🌫️"; // fog

        case 51:
        case 53:
        case 55:
        return "🌦️"; // drizzle

        case 61:
        case 63:
        case 65:
        return "🌧️"; // rain

        case 71:
        case 73:
        case 75:
        return "❄️"; // snow

        case 95:
        case 96:
        case 99:
        return "⛈️"; // thunderstorm

        default:
        return "❓";
    }
}
export default async function GetWeather(city){
    // 
    const coords= {lon:city.lon,lat:city.lat}

    const URL =`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code`
    
    let data;
    await axios.get(URL, {
    })
    .then((response) => {
    data={temp:response.data.current.temperature_2m,
        max:response.data.daily.temperature_2m_max[0],
        min:response.data.daily.temperature_2m_min[0],
        code:response.data.current.weather_code,
        icon:getWeatherEmoji(response.data.current.weather_code)
    }
    })
    .catch((error) => {
    console.error(error);
    })
    return data;
}