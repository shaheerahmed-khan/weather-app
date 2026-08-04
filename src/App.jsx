import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import useGeocoding from "/src/hooks/useGeocoding.js";
import useGeolocation from "/src/hooks/useGeolocation.js";
import useWeather from "/src/hooks/useWeather.js";

export default function App() {
  const [searchCity, setSearchCity] = useState("");

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

  const weatherError = weatherData.error && !weatherData.data ? weatherData.error : null;
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
    return (
      <div className="min-h-screen p-4 px-10 flex flex-col gap-3 font-[Bricolage_Grotesque]  mx-auto bg-[hsl(243,96%,9%)] text-white">
        <Navbar />
        <main className="m-4 p-6 flex flex-col items-center gap-6">
          <img
            src="/assets/images/icon-error.svg"
            alt="Error"
            className="w-8 h-8"
          />
          <h1 className="text-4xl font-bold">Something went wrong</h1>
          <p>
            We couldn't connect to the server(API error), Please try again in a
            few moments.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center shadow-lg bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,30%)] py-2 px-4 rounded-md"
          >
            <img
              src="/assets/images/icon-retry.svg"
              alt="Refresh"
              className="w-4 h-4 mr-2"
            />
            <span>Retry</span>
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 px-10 flex flex-col gap-3 font-[Bricolage_Grotesque]  mx-auto bg-[hsl(243,96%,9%)] text-white">
      <Navbar />
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
      />
    </div>
  );
}
