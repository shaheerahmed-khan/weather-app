import WeatherBoard from "./WeatherBoard.jsx";
import ForecastBoard from "./ForecastBoard.jsx";

export default function MainContent({ weatherData, place, loading }) {

  return (
    <main className="p-4 flex gap-4">
      <WeatherBoard
        currentWeatherData={weatherData?.data?.current}
        dailyWeatherData={weatherData?.data?.daily}
        loading={loading}
        place={place}
      />
      <ForecastBoard
        dailyWeatherData={weatherData?.data?.daily}
        hourlyWeatherData={weatherData?.data?.hourly}
        loading={loading}
      />
    </main>
  );
}
