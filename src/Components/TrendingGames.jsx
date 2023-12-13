import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className=" md:grid md:grid-cols-3 mt-5 gap-4 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="bg-[#6a90cd5e] group hover:scale-110 transition-all ease-in-out duration-200 rounded-lg ">
                <img
                  src={item.background_image}
                  className="h-[270px]  rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white  text-[18px] p-2 font-bold drop-shadow-[0 0.8px 0.8px rgba(0, 0, 0, 0.6)] ">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
