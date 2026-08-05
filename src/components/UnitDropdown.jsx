import { useState } from "react";
import { unitOptions } from "../assets/unitData.js";

export default function UnitDropdown({ weatherConfig, onSelectUnit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative rounded-lg shadow-lg bg-[hsl(243,27%,20%)] p-2 z-1 hover:bg-[hsl(243,23%,30%)] transition-colors cursor-pointer active:scale-95 active:translate-y-px focus-within:outline focus-within:outline-white"
    >
      <button type="button" className="flex items-center gap-2">
        <img src="/assets/images/icon-units.svg" alt="Units" />
        <span>Units</span>
        <img
          src="/assets/images/icon-dropdown.svg"
          alt="Toggle units"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectUnit({
                      ...weatherConfig,
                      [category.stateKey]: unit.name,
                    });
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between w-full cursor-pointer rounded-md p-1.5 hover:bg-[hsl(243,23%,30%)]"
                >
                  <span>{unit.label}</span>
                  {weatherConfig[category.stateKey] === unit.name && (
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
