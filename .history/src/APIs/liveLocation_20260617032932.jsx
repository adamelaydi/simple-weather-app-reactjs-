
    export async function GetLiveLocation(lang = "en") {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        async (position) => {
            
            try {
            const { latitude, longitude } = position.coords;
                console.log(position.coords)
            const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

            const response = await fetch(URL);
            console.log((response))
            resolve(response.data.results?.[0]); // city object
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