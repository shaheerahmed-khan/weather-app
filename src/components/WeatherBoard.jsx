import AdditionalWeatherMetrics from "./AdditionalWeatherMetrics";
import DailyForecast from "./DailyForecast";
import backgroundImg from "/assets/images/bg-today-large.svg";
import { getWeatherCodeInfo } from "/src/assets/weatherCodes";

export default function WeatherBoard({
  currentWeatherData,
  dailyWeatherData,
  place,
  loading,
}) {
  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh",
            width: "100%",
          }}
          className="p-4 rounded-xl flex items-center justify-between bg-[hsl(243,23%,30%)]"
        >
          <div>
            <h3 className="text-2xl font-bold "></h3>
            <span></span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-8xl font-semibold italic"></span>
          </div>
        </div>
        <AdditionalWeatherMetrics
          currentWeatherData={currentWeatherData}
          loading={loading}
        />
        <DailyForecast dailyWeatherData={dailyWeatherData} loading={loading} />
      </div>
    );
  }
  if (!dailyWeatherData) return null;
  if (!currentWeatherData) return null;

  const { temperature_2m, weather_code, time } = currentWeatherData;
  const weather = getWeatherCodeInfo(weather_code);
  const today = new Date(time).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
        }}
        className="p-4 rounded-xl flex items-center justify-between text-white font-[DM_Sans] bg-[hsl(233,67%,56%)]"
      >
        <div>
          <h3 className="text-2xl font-bold ">
            {place?.city}, {place?.country}
          </h3>
          <span>{today}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img
            src={weather?.icon}
            alt={weather?.description}
            className="w-36 h-36"
          />
          <span className="text-8xl font-semibold italic">
            {Math.round(temperature_2m)}°
          </span>
        </div>
      </div>
      <AdditionalWeatherMetrics
        currentWeatherData={currentWeatherData}
        loading={loading}
      />
      <DailyForecast dailyWeatherData={dailyWeatherData} loading={loading} />
    </div>
  );
}
