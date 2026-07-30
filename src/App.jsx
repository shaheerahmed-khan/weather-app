import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState } from "react";
import useGeolocation from "/src/hooks/useGeolocation.js";
import useWeather from "/src/hooks/useWeather.js";
import useGeocoding from "/src/hooks/useGeocoding.js";

export default function App() {
  const [searchCity, setSearchCity] = useState("");

  const userCoordinates = useGeolocation();
  const searchedCoordinates = useGeocoding(searchCity);
  const coordinates =
    searchedCoordinates.location.latitude !== null
      ? searchedCoordinates
      : userCoordinates;
  const weatherData = useWeather({
    latitude: coordinates.location.latitude,
    longitude: coordinates.location.longitude,
  });

  return (
    <div className="min-h-screen p-4 px-10 flex flex-col gap-3 font-[Bricolage_Grotesque]  mx-auto bg-[hsl(243,96%,9%)]">
      <Navbar />
      <Header onSearch={setSearchCity} />
      <MainContent weatherData={weatherData} />
    </div>
  );
}
