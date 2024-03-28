import React, { useEffect, useState, useContext } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";
import { SearchResultsContext } from "../Context/SearchResultContext";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  const { searchResults } = useContext(SearchResultsContext);

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => {
      // console.log(res.data.results);
      setAllGameList(res.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    console.log("GenreID", id);
    GlobalApi.getGameListByGenreID(id).then((resp) => {
      // console.log("gamelist by genre ID", resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-4 ">
      <div className=" h-full hidden md:block">
        <GenreList
          genreId={(genreId) => getGameListByGenresId(genreId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 p-3 ">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, index) => (
              <div key={index}>
                <div className="bg-[#6a90cd5e] p-3 group hover:scale-110 transition-all ease-in-out duration-200 rounded-lg mt-5 pb-10 h-full">
                  <img
                    src={result.background_image}
                    className="w-full h-[80%] rounded-xl object-cover"
                  />
                  <h2 className="text-[18px] font-bold dark:text-white">
                    {result.name}{" "}
                    <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium ">
                      {result.metacritic}
                    </span>
                  </h2>
                  <h2 className="text-[#c5b9b9] dark:text-gray-300 ">
                    ⭐ {result.rating} 💬 {result.reviews_count} ❤️‍🔥{" "}
                    {result.suggestions_count}{" "}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
              <div>
                <Banner gameBanner={allGameList[11]} />
                <TrendingGames gameList={allGameList} />
                <GamesByGenresId
                  gameList={gameListByGenres}
                  selectedGenresName={selectedGenresName}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
