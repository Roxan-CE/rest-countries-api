import React from "react";
import {
  Div,
  StyledHeader,
  H1,
  ThemeToggle,
  MoonIcon,
} from "./styleComponents/headerStyles";

function Header(props) {
  return (
    <Div theme={props.theme} className="container">
      <StyledHeader className="d-flex shadow-sm rounded">
        <H1 className="headerTitle">Where in the world?</H1>
        <ThemeToggle onClick={props.onClick} className="darkModeLink">
          <MoonIcon
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Moon</title>
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </MoonIcon>
          {props.theme.body === "#fafafa" ? "Dark Mode" : "Light Mode"}
        </ThemeToggle>
      </StyledHeader>
    </Div>
  );
}

export default Header;
