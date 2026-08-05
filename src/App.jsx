import { useState } from "react";
import ErrorScreen from "./components/ErrorScreen";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import useGeocoding from "/src/hooks/useGeocoding.js";
import useGeolocation from "/src/hooks/useGeolocation.js";
import useWeather from "/src/hooks/useWeather.js";

export default function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherConfig, setWeatherConfig] = useState({
    temperature: "Celsius",
    windSpeed: "km/h",
    precipitation: "mm",
  });

  const userCoordinates = useGeolocation();
  const searchedCoordinates = useGeocoding(searchCity);
  const location =
    searchedCoordinates.location.latitude !== null &&
    searchedCoordinates.location.longitude !== null
      ? searchedCoordinates.location
      : userCoordinates.location;
  const weatherData = useWeather(location);

  const loading =
    userCoordinates.loading ||
    searchedCoordinates.loading ||
    weatherData.loading;

  const weatherError =
    weatherData.error && !weatherData.data ? weatherData.error : null;
  const searchError =
    searchCity?.trim() &&
    searchedCoordinates.error &&
    searchedCoordinates.location.latitude === null &&
    searchedCoordinates.location.longitude === null
      ? "We couldn't find that city. Showing your current location instead."
      : null;
  const geolocationMessage = userCoordinates.error
    ? "Using a default location because location access was unavailable."
    : null;
  const statusMessage = searchError ?? geolocationMessage;
  const error = weatherError;

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <div className="min-h-screen p-3 sm:p-4 lg:px-10 flex flex-col gap-3 font-[Bricolage_Grotesque] mx-auto bg-[hsl(243,96%,9%)] text-white">
      <Navbar weatherConfig={weatherConfig} onSelectUnit={setWeatherConfig} />
      {statusMessage ? (
        <div
          role="alert"
          className="rounded-lg border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200"
        >
          {statusMessage}
        </div>
      ) : null}
      <Header onSearch={setSearchCity} />
      <MainContent
        weatherData={weatherData}
        place={location}
        loading={loading}
        weatherConfig={weatherConfig}
      />
    </div>
  );
}
