import WeatherBoard from "./WeatherBoard.jsx";
import ForecastBoard from "./ForecastBoard.jsx";

export default function MainContent() {
  return (
    <main className="p-4 flex gap-4">
      <WeatherBoard />
      <ForecastBoard />
    </main>
  );
}
