import { metrics } from "/src/assets/additionalWeatherMetricData.js";

export default function AdditionalWeatherMetrics({ currentWeatherData }) {
  return (
    <div className="flex gap-5 w-full flex-wrap justify-center">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl"
        >
          <span className="text-lg p-2 px-6">{metric}</span>
          <span className="text-2xl p-2 px-6">{currentWeatherData[index]}</span>
        </div>
      ))}
    </div>
  );
}
