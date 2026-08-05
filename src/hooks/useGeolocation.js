import { useEffect, useState } from "react";
import { getLocationName } from "/src/api/reverseGeocoding.js";

export default function useGeolocation() {
  const geolocationSupported =
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    "geolocation" in navigator;

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
    country: "",
  });
  const [loading, setLoading] = useState(!geolocationSupported);
  const [error, setError] = useState(
    geolocationSupported
      ? null
      : "Geolocation is not supported by your browser",
  );

  useEffect(() => {
    if (!geolocationSupported) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        try {
          const place = await getLocationName(latitude, longitude);
          setLocation({
            latitude,
            longitude,
            city: place.city,
            country: place.country,
          });
          setError(null);
        } catch {
          setLocation({
            latitude,
            longitude,
            city: "",
            country: "",
          });
          setError("Unable to resolve your location right now.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(
          "Using a default location because location access was unavailable.",
        );
        setLocation({
          latitude: 40.7128,
          longitude: -74.006,
          city: "New York",
          country: "United States",
        });
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }, [geolocationSupported]);

  return { location, loading, error };
}
