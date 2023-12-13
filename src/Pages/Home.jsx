import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");

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
      console.log("gamelist by genre ID", resp.data.results);
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
    </div>
  );
};

export default Home;
