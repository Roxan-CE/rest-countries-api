import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { lightTheme, darkTheme } from "./Themes";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";
import MoreInfo from "./MoreInfo";
function CountryDetails() {
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

  //BACK LOGIC
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <Header theme={themeMode} onClick={themeToggler} />
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            go back
          </button>
        </div>
        <MoreInfo />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default CountryDetails;
