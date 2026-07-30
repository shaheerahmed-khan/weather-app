import { useState } from "react";

export default function Header() {

  const [isFormActive, setIsFormActive] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 font-[DM_Sans]">
      <h1 className="flex justify-center w-full text-white text-4xl font-bold font-[Bricolage_Grotesque]">
        How's the sky looking today?
      </h1>
      <div className="flex justify-center items-center gap-2">
        <form className="relative mt-5 w-sm h-10 text-[hsl(250,6%,84%)] bg-[hsl(243,27%,20%)] rounded-lg flex justify-center "
        onClick={() => setIsFormActive(!isFormActive)}
        >
          <img
            src="/assets/images/icon-search.svg"
            className="absolute top-3 left-3 text-[hsl(250,6%,84%)] w-4 h-4"
          ></img>
          <input
            type="text"
            placeholder="Search for a place..."
            className="pl-10 w-full bg-transparent focus:outline-none  "
          />
          {isFormActive && (
            <div className="flex flex-col w-full absolute top-10 left-0 bg-[hsl(243,27%,20%)] rounded-lg mt-1 p-1 gap-2">
              <span className="hover:bg-[hsl(243,23%,30%)] p-2 rounded-lg">City Name</span>
              <span className="hover:bg-[hsl(243,23%,30%)] p-2 rounded-lg">City Name</span>
              <span className="hover:bg-[hsl(243,23%,30%)] p-2 rounded-lg">City Name</span>
              <span className="hover:bg-[hsl(243,23%,30%)] p-2 rounded-lg">City Name</span>
            </div>
          )}
        </form>
        <button className="bg-[hsl(233,67%,56%)] text-white text-sm rounded-lg h-10 p-3 mt-5 flex items-center">
          Search
        </button>
      </div>
    </div>
  );
}
