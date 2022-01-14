import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { lightTheme, darkTheme } from "./Themes";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";
import MoreInfo from "./MoreInfo";

import { MainDiv } from "./styleComponents/CountryStyles/MainDiv";
import { Arrow } from "./styleComponents/CountryStyles/Arrow";
import { Backbutton } from "./styleComponents/CountryStyles/Backbutton";
import { CountryBody } from "./styleComponents/CountryStyles/CountryBody";
import { Icon } from "./styleComponents/CountryStyles/Icon";

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

        <CountryBody>
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
        </CountryBody>
        <Footer theme={themeMode} />
      </MainDiv>
    </ThemeProvider>
  );
}

export default CountryDetails;
