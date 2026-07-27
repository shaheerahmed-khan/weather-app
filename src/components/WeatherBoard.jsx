import AdditionalWeatherMetrics from "./AdditionalWeatherMetrics";
import DailyForecast from "./DailyForecast";
import backgroundImg from "/assets/images/bg-today-large.svg";
import iconSunny from "/assets/images/icon-sunny.webp";

export default function WeatherBoard() {
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
        <h3 className="text-2xl font-bold ">Berlin, Germany</h3>
        <span>Tuesday, August 5, 2026</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src={iconSunny} alt="Sunny" className="w-36 h-36" />
        <span className="text-8xl font-semibold italic">
          20°
        </span>
      </div>
    </div>
      <AdditionalWeatherMetrics />
      <DailyForecast />
    </div>
  );
}
