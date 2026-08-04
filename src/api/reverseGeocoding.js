import axios from "axios";

const reverseGeocoder = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
  headers: {
    Accept: "application/json",
  },
});

export async function getLocationName(latitude, longitude) {
  const { data } = await reverseGeocoder.get("/reverse", {
    params: {
      lat: latitude,
      lon: longitude,
      format: "jsonv2",
    },
  });
  console.log("Reverse geocoding data:", data);
  return {
    city: data.address.city,
    country: data.address.country,
  };
}
