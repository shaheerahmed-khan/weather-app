import { getWeatherCodeInfo } from "/src/assets/weatherCodes.js";

export default function DailyForecast({ dailyWeatherData, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col gap-2 w-full m-1 mt-4">
        <h2 className="text-xl m-2 w-full">Daily forecast</h2>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4  bg-[hsl(243,23%,30%)] rounded-xl">
            <span></span>
            <img />
            <div className="flex justify-between gap-2 p-4">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!dailyWeatherData) return null;

  return (
    <div className="flex flex-col gap-2 w-full text-white font-[DM_Sans] m-1 mt-4">
      <h2 className="text-xl m-2 w-full">Daily forecast</h2>
      <div className="flex flex-wrap justify-between">
        {dailyWeatherData.time.map((date, index) => (
          <div
            key={date}
            className="flex flex-col items-center gap-2 p-4 m-2 bg-[hsl(243,23%,30%)] rounded-xl"
          >
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>
            <img
              src={
                getWeatherCodeInfo(dailyWeatherData.weather_code[index]).icon
              }
              alt={
                getWeatherCodeInfo(dailyWeatherData.weather_code[index])
                  .description
              }
              className="w-16 h-16"
            />
            <div className="flex justify-between gap-4">
              <span>{dailyWeatherData.temperature_2m_max[index]}°</span>
              <span>{dailyWeatherData.temperature_2m_min[index]}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
