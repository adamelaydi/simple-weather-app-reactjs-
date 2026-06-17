    export async function GetLiveLocation(lang = "en") {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
            const { latitude, longitude } = position.coords;

            const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&language=${lang}`;

            const res = await fetch(url);

            if (!res.ok) {
                throw new Error("API request failed");
            }

            const data = await res.json();

            console.log(data);

            resolve(data.results?.[0]);
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