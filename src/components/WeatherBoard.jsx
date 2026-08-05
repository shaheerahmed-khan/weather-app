import AdditionalWeatherMetrics from "./AdditionalWeatherMetrics";
import DailyForecast from "./DailyForecast";
import backgroundImg from "/assets/images/bg-today-large.svg";
import { getWeatherCodeInfo } from "/src/assets/weatherCodes";

export default function WeatherBoard({
  currentWeatherData,
  dailyWeatherData,
  place,
  loading,
  weatherConfig,
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
          className="p-4 sm:p-6 rounded-xl flex flex-col gap-4 items-start justify-between min-h-70 sm:min-h-80 md:flex-row md:items-center bg-[hsl(243,23%,30%)]"
        >
          <div className="w-full md:w-auto">
            <h3 className="text-xl sm:text-2xl font-bold"></h3>
            <span></span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full md:w-auto">
            <span className="text-5xl sm:text-7xl md:text-8xl font-semibold italic"></span>
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
        className="p-4 sm:p-6 rounded-xl flex flex-col gap-4 items-start justify-between text-white font-[DM_Sans] bg-[hsl(233,67%,56%)] md:flex-row md:items-center"
      >
        <div className="w-full md:w-auto">
          <h3 className="text-xl sm:text-2xl font-bold">
            {place?.city}, {place?.country}
          </h3>
          <span>{today}</span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-4 w-full md:w-auto">
          <img
            src={weather?.icon}
            alt={weather?.description}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
          />
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic">
            {weatherConfig.temperature === "Fahrenheit"
              ? `${Math.round((temperature_2m * 9) / 5 + 32)}°`
              : `${Math.round(temperature_2m)}°`}
          </span>
        </div>
      </div>
      <AdditionalWeatherMetrics
        currentWeatherData={currentWeatherData}
        loading={loading}
        weatherConfig={weatherConfig}
      />
      <DailyForecast
        dailyWeatherData={dailyWeatherData}
        loading={loading}
        weatherConfig={weatherConfig}
      />
    </div>
  );
}
