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
    if (!response.data.results?.length) {
      throw new Error("City not found!");
    }
    console.log("Geocoding data:", response.data);
    const result = response.data.results[0];
    return {
      latitude: result.latitude,
      longitude: result.longitude,
      city: result.name,
      country: result.country,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
