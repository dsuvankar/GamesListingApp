import axios from "axios";

const key = "c2641b5257ee4fbeb2fe91d7c04853aa";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreID = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
const searchGames = (searchTerm) => {
  const slug = searchTerm.split(" ").join("-").toLowerCase();
  return axiosCreate.get(`/games?search=${slug}&key=${key}`);
};

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreID,
  searchGames,
};
