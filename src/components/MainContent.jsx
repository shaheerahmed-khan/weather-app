import WeatherBoard from "./WeatherBoard.jsx";
import ForecastBoard from "./ForecastBoard.jsx";

export default function MainContent({ weatherData }) {
  return (
    <main className="p-4 flex gap-4">
      <WeatherBoard currentWeatherData={weatherData.current} dailyWeatherData={ weatherData.daily } />
      <ForecastBoard hourlyWeatherData={ weatherData.hourly } />
    </main>
  );
}
