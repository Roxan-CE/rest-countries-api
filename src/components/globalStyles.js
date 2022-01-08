import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    transition: background 0.2s ease-in, color 0.2s ease-in;
    margin: 0;
    padding: 0; 
  }
  `;
