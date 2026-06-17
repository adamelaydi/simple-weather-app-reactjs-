export function GetLiveLocation(){
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition()
    }else{
        throw console.error("there are an error in getting live location !!");
        
    }
}