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
      <StyledHeader className="d-flex shadow-sm">
        <H1
          className="headerTitle"
          onClick={() => (window.location.href = "/")}
        >
          Where in the world?
        </H1>

        <ThemeToggle onClick={props.onClick} className="darkModeLink">
          {props.theme.body === "#fafafa" ? (
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
          ) : (
            <MoonIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="moon"
              class="svg-inline--fa fa-moon fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
              ></path>
            </MoonIcon>
          )}

          {props.theme.body === "#fafafa" ? "Dark Mode" : "Dark Mode"}
        </ThemeToggle>
      </StyledHeader>
    </Div>
  );
}

export default Header;
