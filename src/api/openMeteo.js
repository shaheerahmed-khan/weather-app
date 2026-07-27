import axios from "axios";

const openMeteoApi = axios.create({
    baseURL: "https://api.open-meteo.com/v1/forecast",
    params: {
        hourly: "temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,cloud_cover",
        current_weather: true,
        timezone: "auto",
    }
});

export async function getWeatherData(latitude, longitude) {
    try {
        const { data } = await openMeteoApi.get("", {
            params: {
                latitude: latitude,
                longitude: longitude
            }
        })
        return data;
    }
    catch (err) {
        console.log(err)
    }
}