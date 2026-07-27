import { useState } from "react";
import { days, forecastData } from "../assets/forecastBoardData";

export default function ForecastBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("Monday");

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
          <div>
            {isOpen ? (
              <div className="flex flex-col gap-1 absolute right-0 top-0 border border-[hsl(243,23%,30%)] bg-[hsl(243,27%,20%)] p-1 rounded-lg">
                {days.map((day, index) => (
                  <span
                    className="flex justify-start hover:bg-[hsl(243,23%,30%)] p-2 pr-10 rounded-lg w-full"
                    onClick={(e) => setIsSelected(e.currentTarget.textContent)}
                    key={index}
                  >
                    {day}
                  </span>
                ))}
              </div>
            ) : (
              <span>{isSelected.toString()}</span>
            )}
          </div>
        </button>
      </div>
      <div>
        {forecastData.map((item, index) => (
          <div
            key={index}
            className="p-1 px-2 m-4 flex justify-between gap-0.5 bg-[hsl(243,23%,30%)] rounded-xl"
          >
            <div className="flex justify-center items-center gap-1 text-lg">
              <img src={item.weatherIcon} alt="Weather" className="w-16 h-16" />
              <span>{item.time}</span>
            </div>
            <div className="flex self-center font-bold">{item.temperature}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
