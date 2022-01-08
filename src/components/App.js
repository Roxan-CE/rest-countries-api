import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { useDarkMode } from "./useDarkMode";
import Search from "./Search";

function App() {
  // THEME CONTROL
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      themeToggler(savedTheme);
    } else if (prefersDark) {
      themeToggler("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Header theme={themeMode} onClick={themeToggler} />
          <Search />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
