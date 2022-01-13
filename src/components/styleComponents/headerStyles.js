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
  min-width: 100vw;
`;

const StyledHeader = styled.header`
  justify-content: space-between;
  padding: 8% 4.5%;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
  @media ${device.laptop} {
    padding: 5% 4.5%;
  }
  @media ${device.laptopL} {
    padding: 1.5% 4.5%;
  }
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  padding: 10px;
  margin: 0 auto;
  line-height: 36px;
  align-self: center;

  @media ${device.tablet} {
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
    padding-left: 40px;
  }

  @media ${device.laptopL} {
    font-size: 1.4rem;
    padding-left: 20px;
    letter-spacing: 0.5px;
  }
`;

const ThemeToggle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  align-self: center;

  @media ${device.tablet} {
    text-align: left;
    font-size: 1.5rem;
    margin: 0;
  }

  @media ${device.laptop} {
    font-size: 1.3rem;
  }
  @media ${device.laptopL} {
    font-size: 0.98rem;
    padding-right: 20px;
  }
`;

const MoonIcon = styled.svg`
  width: 1.2rem;
  margin: auto 6px;

  @media ${device.tablet} {
    width: 1.7rem;
    margin: auto 15px;
  }
  @media ${device.laptop} {
    width: 1.4rem;
  }
  @media ${device.laptopL} {
    width: 1rem;
    margin: auto 8px;
  }
`;

export { Div, StyledHeader, H1, ThemeToggle, MoonIcon };
