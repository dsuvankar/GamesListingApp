import React, { useEffect } from "react";

function GamesByGenresId({ gameList, selectedGenresName }) {
  useEffect(() => {}, []);
  return (
    <div className="">
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenresName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((item) => (
          <div className="bg-[#6a90cd5e] p-3 group hover:scale-110 transition-all ease-in-out duration-200 rounded-lg mt-5 pb-10 h-full">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[18px] font-bold dark:text-white">
              {item.name}{" "}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium ">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-[#c5b9b9] dark:text-gray-300 ">
              ⭐ {item.rating} 💬 {item.reviews_count} ❤️‍🔥{" "}
              {item.suggestions_count}{" "}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
