import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";
import { SearchResultsProvider } from "./Context/SearchResultContext.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SearchResultsProvider>
        <div
          className={`${theme} ${
            theme === "dark" ? "bg-[#121212]" : null
          } min-h-[100vh] min-w-full`}>
          <Header />
          <Home />
        </div>
      </SearchResultsProvider>
    </ThemeContext.Provider>
  );
}

export default App;
