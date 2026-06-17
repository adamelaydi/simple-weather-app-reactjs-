export function GetLiveLocation(lang){
    if(navigator.geolocation){
        let coords=navigator.geolocation.getCurrentPosition();
        const 
    }else{
        throw console.error("there are an error in getting live location !!");
        
    }
}