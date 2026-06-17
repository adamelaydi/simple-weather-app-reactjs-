export function GetLiveLocation(){
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition()
    }else{
        throw console.error();
        
    }
}