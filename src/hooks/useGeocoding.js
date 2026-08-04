import { useState, useEffect } from "react";
import { getCoordinates } from "/src/api/geocoding.js";

export default function useGeocoding(city) {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
    country:""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city?.trim()) return;

    async function fetchLocation() {
      try {
        setLoading(true);
        setError(null);
        const response = await getCoordinates(city);
        setLocation(response);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchLocation();
  }, [city]);

  return { location, loading, error };
}
