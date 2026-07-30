import axios from "axios";

const geocoding = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/search",
});

export async function getCoordinates(city) {
  try {
    const response = await geocoding.get("", {
      params: {
        name: city,
        count: 1,
      },
    });
    if (!location.data.results?.length) {
      throw new Error("City not found!");
    }

    const result = response.data.results[0];
    return {
      latitude: result.latitude,
      longitude: result.longitude,
      name: result.name,
      country: result.country,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
