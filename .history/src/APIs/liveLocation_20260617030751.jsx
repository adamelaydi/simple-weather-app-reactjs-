    import axios from "axios";

    export async function GetLiveLocation(lang = "en") {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        async (position) => {
            
            try {
            const { latitude, longitude } = position.coords;
                console.log
            const URL = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&language=${lang}`;

            const response = await axios.get(URL);

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