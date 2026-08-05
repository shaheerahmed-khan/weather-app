import { metrics } from "/src/assets/weatherMetrics.js";

export default function AdditionalWeatherMetrics({
  currentWeatherData,
  loading,
  weatherConfig,
}) {
  if (loading) {
    return (
      <div className="flex gap-5 w-full justify-center">
        {metrics.map((metric) => (
          <div
            key={metric.key}
            className="p-5 flex flex-col text-white bg-[hsl(243,23%,30%)] rounded-xl"
          >
            <span className="text-lg p-2 px-6">{metric.label}</span>
            <span className="text-2xl p-2 px-6"></span>
          </div>
        ))}
      </div>
    );
  }
  if (!currentWeatherData) return null;

  const metricsWithUnits = metrics.map((metric) => {
    let value = currentWeatherData[metric.key];
    if (metric.key === "temperature_2m") {
      value = weatherConfig.temperature === "Fahrenheit"
        ? (value * 9) / 5 + 32
        : value;
    }
    else if (metric.key === "wind_speed_10m") {
      value = weatherConfig.windSpeed === "mph"
        ? value * 2.23694
        : value;
    }
    else if (metric.key === "precipitation") {
      value = weatherConfig.precipitation === "inches"
        ? value * 0.0393701
        : value;
    }
    return { ...metric, value };
  });

  return (
    <div className="flex gap-5 w-full flex-wrap justify-center">
      {metricsWithUnits.map((metric) => (
        <div
          key={metric.key}
          className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl"
        >
          <span className="text-lg p-2 px-6">{metric.label}</span>
          <span className="text-2xl p-2 px-6">
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  );
}
