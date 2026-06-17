export function GetLiveLocation(lang){
    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition();
    }else{
        throw console.error("there are an error in getting live location !!");
        
    }
}