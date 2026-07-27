export default function AdditionalWeatherMetrics() {
  return (
    <div className="flex gap-5 w-full flex-wrap justify-center">
      <div className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl">
        <span className="text-lg p-2 px-6">Feels like</span>
        <span className="text-2xl p-2 px-6">20°</span>
      </div>
      <div className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl">
        <span className="text-lg p-2 px-6">Humidity</span>
        <span className="text-2xl p-2 px-6">60%</span>
      </div>
      <div className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl">
        <span className="text-lg p-2 px-6">Wind Speed</span>
        <span className="text-2xl p-2 px-6">10 km/h</span>
      </div>
      <div className="p-5 flex flex-col  text-white bg-[hsl(243,23%,30%)] rounded-xl">
        <span className="text-lg p-2 px-6">Precipitation</span>
        <span className="text-2xl p-2 px-6">0 mm</span>
      </div>
    </div>
  );
}
