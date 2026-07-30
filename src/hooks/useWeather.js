import { useState, useEffect } from "react";
import { getWeatherData } from "/src/api/openMeteo.js";

export default function useWeather(options) {
  const { latitude, longitude } = options || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) {
      return;
    }
    (async () => {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        const response = await getWeatherData(latitude, longitude);
        setData(response);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [latitude, longitude]);

  return { data, loading, error };
}
