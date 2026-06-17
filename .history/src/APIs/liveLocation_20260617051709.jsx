    import GetWeather from "./weatherApi.jsx"
    export async function GetLiveLocation() {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported");
    }
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
            const { latitude, longitude } = position.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            const weather=await GetWeather(position.coords) ;
            const DATA = {cityName:data.address?.city ||
                data.address?.town ||
                data.address?.state,
                weatherData:weather
            }

            resolve(DATA);
            } catch (error) {
            console.error("API error:", error);
            reject(error);
            }
        },
        (error) => {
            console.error("Geolocation error:", error);
            reject(error);
        }
        );
    });
    }