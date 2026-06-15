import axios from "axios"
export default async function GetWeather(city){
    const coords= {lon:city.lon,lat:city.lat}
    
    await axios.get(URL, {
    })
    .then((response) => {
    console.log(response);
    const data={temp:response.data.current.temperature_2m,
        max:response.data.daily.temperature_2m_max[0],
        min:response.data.daily.temperature_2m_min[0],
        weatherCode:response.data.current.weather_code
    }
    console.log(data)
    return data;
    })
    .catch((error) => {
    console.error(error);
    })
}