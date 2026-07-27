import { useState, useEffect } from "react";

export default function useGeolocation() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
      
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                setLoading(false);
            },
            (err) => {
                setError(`Location error: ${err.message}. Using default location.`);
                setLoading(false);
                setLocation({
                    latitude: 40.7128, // Default latitude (New York City)
                    longitude: -74.0060 // Default longitude (New York City)
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        )
        
    }, [enableHighAccuracy, timeout, maximumAge]);

    return { location, loading, error };
}