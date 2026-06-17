export function GetLiveLocation(lang){
    if(navigator.geolocation){
        let coords=navigator.geolocation.getCurrentPosition();
        const URL =`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${coords.}&longitude=${coords.longitude}&language=en`
    }else{
        throw console.error("there are an error in getting live location !!");
        
    }
}