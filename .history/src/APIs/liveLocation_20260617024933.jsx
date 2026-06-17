// Axios library
import axios from "axios";
export async function GetLiveLocation(lang){
    if(navigator.geolocation){
        let coords=navigator.geolocation.getCurrentPosition();
        const URL =`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${coords.latitude}&longitude=${coords.longitude}&language=${lang}`
        awaite axios.get(URL.{
            
        })
    }else{
        throw console.error("there are an error in getting live location !!");
        
    }
}