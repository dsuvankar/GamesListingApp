import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {gameBanner.name}
        </h2>
        <button className="bg-blue-700 text-white px-2 py-1">Get Now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className=" w-full  md:h-[450px] rounded-xl object-cover "
      />
    </div>
  );
}

export default Banner;
