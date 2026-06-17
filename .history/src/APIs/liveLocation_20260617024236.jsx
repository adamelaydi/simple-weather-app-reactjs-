export function GetLiveLocation(){
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition()
    }
}