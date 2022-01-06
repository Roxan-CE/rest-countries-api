import Header from "./Header";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Datalist from "./Datalist";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useDarkMode } from "./useDarkMode";
import Toggle from "./Toggler";

function App() {
  const [apiURL, setApiUrl] = useState("https://restcountries.com/v3.1/all");
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const changeSelection = (selection) => {
    console.log("I received " + selection);
    setApiUrl(selection);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Header onClick={themeToggler} />
          <Searchbar onSubmit={changeSelection} />
          <Filter onSelect={changeSelection} />
          <Datalist API={apiURL} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
