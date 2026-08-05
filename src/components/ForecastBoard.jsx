import { useState } from "react";
import { weatherCodes } from "/src/assets/weatherCodes";

export default function ForecastBoard({
  dailyWeatherData,
  hourlyWeatherData,
  loading,
  weatherConfig,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  if (loading) {
    return (
      <div className="w-full max-w-md mx-auto rounded-xl p-1 text-white font-[DM_Sans] bg-[hsl(243,27%,20%)]">
        <div className="flex justify-between w-full p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Hourly forecast</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row-reverse items-center gap-2 relative rounded-md p-1.5 pr-2 bg-[hsl(243,23%,30%)] cursor-pointer text-sm font-medium"
          >
            <img
              src="/assets/images/icon-dropdown.svg"
              className="text-white"
              style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
            />
            <div></div>
          </button>
        </div>
        <div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
          <div className="m-4 p-6 rounded-lg bg-[hsl(243,23%,30%)]">
            <img />
            <span> </span>
          </div>
        </div>
      </div>
    );
  }
  if (!dailyWeatherData) return null;
  if (!hourlyWeatherData) return null;

  const selectedDate = dailyWeatherData.time[selectedDayIndex];

  const filteredHourlyData = hourlyWeatherData.time
    .map((time, index) => ({
      time,
      temperature:
        weatherConfig.temperature === "Fahrenheit"
          ? (hourlyWeatherData.temperature_2m[index] * 9) / 5 + 32
          : hourlyWeatherData.temperature_2m[index],
      weatherCode: hourlyWeatherData.weather_code[index],
    }))
    .filter((item) => item.time.startsWith(selectedDate));

  return (
    <div className="w-full max-w-md overflow-scroll scroll-smooth scrollbar-none max-h-225 mx-auto rounded-xl p-1 text-white font-[DM_Sans] bg-[hsl(243,27%,20%)]">
      <div className="flex justify-between w-full p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Hourly forecast</h3>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row-reverse items-center gap-2 relative rounded-md p-1.5 pr-2 bg-[hsl(243,23%,30%)] cursor-pointer text-sm font-medium"
        >
          <img
            src="/assets/images/icon-dropdown.svg"
            className="text-white"
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          <div>
            {isOpen ? (
              <div className="flex flex-col gap-1 absolute right-0 top-0 border border-[hsl(243,23%,30%)] bg-[hsl(243,27%,20%)] p-1 rounded-lg">
                {dailyWeatherData.time.map((date, index) => (
                  <button
                    className="flex justify-start hover:bg-[hsl(243,23%,30%)] p-2 pr-10 rounded-lg w-full"
                    type="button"
                    onClick={() => {
                      setSelectedDayIndex(index);
                      setIsOpen(false);
                    }}
                    key={index}
                  >
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </button>
                ))}
              </div>
            ) : (
              <span>
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        {filteredHourlyData.map((item) => (
          <div
            key={item.time}
            className="p-1 px-2 m-4 flex justify-between gap-0.5 bg-[hsl(243,23%,30%)] rounded-xl"
          >
            <div className="flex justify-center items-center gap-1 text-lg">
              <img
                src={weatherCodes[item.weatherCode]?.icon}
                alt="Weather"
                className="w-16 h-16"
              />
              <span>
                {new Date(item.time).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="flex self-center font-bold">
              {Math.round(item.temperature)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
