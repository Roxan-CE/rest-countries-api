import { createGlobalStyle } from "styled-components";
import { device } from "./styleComponents/device.js";

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    transition: background 0.15s ease-in, color 0.15s ease-in;
    margin: 0;
    padding: 0; 
    width: 100vw;

    @media ${device.tablet} {
    margin: 0;
    padding: 0; 
    min-width: 750px;

  }
  
  }
  `;
