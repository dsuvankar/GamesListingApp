import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiOutlineSearch, HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";
import GlobalApi from "../Services/GlobalApi";
import { SearchResultsContext } from "../Context/SearchResultContext.jsx";

function Header() {
  const [toggle, setToggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { theme, setTheme } = useContext(ThemeContext);
  const { setSearchResults } = useContext(SearchResultsContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  // useEffect(() => {
  //   setSearchResults([]);
  // }, [searchTerm]);

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await GlobalApi.searchGames(searchTerm);
        setSearchResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // useEffect(() => {
  //   console.log(searchResults);
  // }, [searchResults]);

  return (
    <div className="  flex items-center ">
      <img src={logo} width={60} height={60} />

      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent  outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
