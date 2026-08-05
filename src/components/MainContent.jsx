import ForecastBoard from "./ForecastBoard.jsx";
import WeatherBoard from "./WeatherBoard.jsx";

export default function MainContent({
  weatherData,
  place,
  loading,
  weatherConfig,
}) {
  return (
    <main className="p-2 sm:p-4 flex flex-col gap-4 w-full md:flex-row">
      <WeatherBoard
        currentWeatherData={weatherData?.data?.current}
        dailyWeatherData={weatherData?.data?.daily}
        loading={loading}
        place={place}
        weatherConfig={weatherConfig}
      />
      <ForecastBoard
        dailyWeatherData={weatherData?.data?.daily}
        hourlyWeatherData={weatherData?.data?.hourly}
        loading={loading}
        weatherConfig={weatherConfig}
      />
    </main>
  );
}
