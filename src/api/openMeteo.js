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
          "apparent_temperature",
          "relative_humidity_2m",
          "wind_speed_10m",
          "precipitation",
          "weather_code",
          "temperature_2m",
        ].join(","),

        hourly: [
          "temperature_2m",
          "relative_humidity_2m",
          "precipitation_probability",
          "wind_speed_10m",
          "cloud_cover",
          "weather_code",
        ].join(","),

        daily: [
          "weather_code",
          "temperature_2m_max",
          "temperature_2m_min",
          "apparent_temperature_max",
          "apparent_temperature_min",
          "precipitation_sum",
          "precipitation_probability_max",
          "wind_speed_10m_max",
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
