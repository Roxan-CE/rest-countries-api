import styled from "styled-components";
import { device } from "./device.js";

const Div = styled.div`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  transition: background 0.2s ease-in, color 0.2s ease-in;
  padding: 0;
  margin: 0;
  max-width: 100vw;

  @media ${device.tablet} {
    min-width: 750px;
  }

  @media ${device.desktop} {
  }
`;

const StyledHeader = styled.header`
  justify-content: space-between;
  padding: 8% 4.5%;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  padding: 10px;
  margin: 0 auto;
  line-height: 36px;
  align-self: center;
  text-align: center;

  @media ${device.tablet} {
    font-weight: 800;
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
    line-height: 36px;
    align-self: center;
  }
`;

const ThemeToggle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;

const MoonIcon = styled.svg`
  width: 1.2rem;
  margin: auto 6px;

  @media ${device.tablet} {
    width: 1.7rem;
    margin: auto 15px;
  }
`;

export { Div, StyledHeader, H1, ThemeToggle, MoonIcon };
