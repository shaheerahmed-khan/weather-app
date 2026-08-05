import { useState } from "react";
import searchIcon from "/assets/images/icon-search.svg";
import { getCoordinates } from "/src/api/geocoding.js";

export default function Header({ onSearch }) {
  const [isFormActive, setIsFormActive] = useState(false);
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  async function handleInputChange(value) {
    setCity(value);

    if (value.trim().length < 2) {
      setSuggestions([]);
      setIsFormActive(false);
      return;
    }

    try {
      setLoadingSuggestions(true);
      const result = await getCoordinates(value.trim());
      setSuggestions([
        {
          city: result.city,
          country: result.country,
          latitude: result.latitude,
          longitude: result.longitude,
        },
      ]);
      setIsFormActive(true);
    } catch {
      setSuggestions([]);
      setIsFormActive(false);
    } finally {
      setLoadingSuggestions(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
    setIsFormActive(false);
  }

  function handleSuggestionSelect(suggestion) {
    setCity(suggestion.city);
    onSearch(suggestion.city);
    setSuggestions([]);
    setIsFormActive(false);
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 font-[DM_Sans] px-1 sm:px-0">
      <h1 className="flex justify-center w-full text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-[Bricolage_Grotesque] text-center">
        How's the sky looking today?
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 w-full sm:w-auto">
        <form
          className="relative mt-0 sm:mt-5 w-full sm:w-sm h-10 text-[hsl(250,6%,84%)] bg-[hsl(243,27%,20%)] rounded-lg flex justify-center hover:bg-hsl(243,23%,30%) focus-within:bg-[hsl(243,23%,30%)] transition-colors"
          onSubmit={handleSearch}
        >
          <img
            src={searchIcon}
            alt="Search"
            className="absolute top-3 left-3 text-[hsl(250,6%,84%)] w-4 h-4"
          ></img>
          <input
            type="text"
            placeholder="Search for a place..."
            className="pl-10 w-full bg-transparent focus:outline-white focus:rounded-lg hover:cursor-pointer"
            value={city}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => {
              if (city.trim().length >= 2) {
                setIsFormActive(true);
              }
            }}
          />
          {isFormActive && (
            <div className="flex flex-col w-full absolute top-10 left-0 bg-[hsl(243,27%,20%)] rounded-lg mt-1 p-1 gap-2 z-10">
              {loadingSuggestions && (
                <span className="p-2 rounded-lg text-sm opacity-75">
                  Searching...
                </span>
              )}

              {!loadingSuggestions &&
                suggestions.length === 0 &&
                city.trim().length >= 2 && (
                  <span className="p-2 rounded-lg text-sm opacity-75">
                    No matching city found.
                  </span>
                )}

              {suggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.city}-${index}`}
                  type="button"
                  className="text-left hover:bg-[hsl(243,23%,30%)] p-2 rounded-lg"
                  onClick={() => handleSuggestionSelect(suggestion)}
                >
                  {suggestion.city}
                  {suggestion.country ? `, ${suggestion.country}` : ""}
                </button>
              ))}
            </div>
          )}
        </form>
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-[hsl(233,67%,56%)] text-white text-sm rounded-lg h-10 px-4 mt-0 sm:mt-5 flex items-center justify-center hover:cursor-pointer hover:bg-[hsl(233,67%,46%)] active:scale-95 active:translate-y-0.5 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
}
