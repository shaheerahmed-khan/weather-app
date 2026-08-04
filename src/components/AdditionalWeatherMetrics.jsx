import { metrics } from "/src/assets/weatherMetrics.js";

export default function AdditionalWeatherMetrics({
  currentWeatherData,
  loading,
}) {
  if (loading) {
    return (
      <div className="flex gap-5 w-full flex-wrap justify-center">
        {metrics.map((metric) => (
          <div
            key={metric.key}
            className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl"
          >
            <span className="text-lg p-2 px-6">{metric.label}</span>
            <span className="text-2xl p-2 px-6"></span>
          </div>
        ))}
      </div>
    );
  }
  if (!currentWeatherData) return null;

  return (
    <div className="flex gap-5 w-full flex-wrap justify-center">
      {metrics.map((metric) => (
        <div
          key={metric.key}
          className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl"
        >
          <span className="text-lg p-2 px-6">{metric.label}</span>
          <span className="text-2xl p-2 px-6">
            {currentWeatherData[metric.key]}
          </span>
        </div>
      ))}
    </div>
  );
}
