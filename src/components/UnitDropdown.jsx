import { useState } from "react";
import { unitOptions } from "../assets/unitData.js";

export default function UnitDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    temperature: "",
    windSpeed: "",
    precipitation: "",
  });

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative rounded-lg shadow-lg bg-[hsl(243,27%,20%)] p-2 z-1"
    >
      <button className="flex items-center gap-2 ">
        <img src="/assets/images/icon-units.svg" />
        <span>Units</span>
        <img
          src="/assets/images/icon-dropdown.svg"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}  `}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col items-start gap-3 absolute top-full right-0 mt-2 p-3 rounded-lg shadow-lg bg-[hsl(243,27%,20%)] w-46  border border-[hsl(243,23%,30%)]">
          <span>Switch to Imperial</span>

          {unitOptions.map((category, index) => (
            <div
              key={category.category}
              className="flex flex-col items-start w-full gap-2"
            >
              <span className="opacity-75">{category.category}</span>
              {category.units.map((unit) => (
                <div
                  key={unit.name}
                  onClick={() =>
                    setConfig({
                      ...config,
                      [category.stateKey]: unit.name,
                    })
                  }
                  className="flex items-center justify-between w-full cursor-pointer rounded-md p-1.5 hover:bg-[hsl(243,23%,30%)]"
                >
                  <span>{unit.label}</span>
                  {config[category.stateKey] === unit.name && (
                    <img
                      src="/assets/images/icon-checkmark.svg"
                      className="w-3 h-3"
                    ></img>
                  )}
                </div>
              ))}
              {index < unitOptions.length - 1 && (
                <hr className="border-t border-[hsl(243,23%,30%)] w-full self-stretch"></hr>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
