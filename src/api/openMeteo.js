import axios from "axios";

const openMeteoApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

export async function getWeatherData(latitude, longitude) {
  try {
    const { data } = await openMeteoApi.get("", {
      params: {
        latitude: latitude,
        longitude: longitude,
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "apparent_temperature",
          "precipitation",
          "weather_code",
          "wind_speed_10m",
        ].join(","),

        hourly: [
          "temperature_2m",
          "relative_humidity_2m",
          "precipitation_probability",
          "wind_speed_10m",
          "cloud_cover",
        ].join(","),

        timezone: "auto",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
