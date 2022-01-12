import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { lightTheme, darkTheme } from "./Themes";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";
import MoreInfo from "./MoreInfo";
import {
  Arrow,
  Backbutton,
  CountryDiv,
  Icon,
  MainDiv,
} from "./styleComponents/CountryStyles";

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
      <MainDiv>
        <Header theme={themeMode} onClick={themeToggler} />
        <Backbutton
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon>
            <Arrow></Arrow>
          </Icon>
          Back
        </Backbutton>
        <MoreInfo theme={themeMode} />
        <Footer theme={themeMode} />
      </MainDiv>
    </ThemeProvider>
  );
}

export default CountryDetails;
