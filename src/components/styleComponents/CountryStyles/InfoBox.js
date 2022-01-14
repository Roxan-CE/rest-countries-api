import styled from "styled-components";
import { device } from "../device.js";

export const InfoBox = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 100%;
  height: auto;

  & h1 {
    font-size: 2.4em;
    font-weight: 600;
    padding: 0 0;
  }

  & h2 {
    font-size: 1.4rem;
  }

  @media ${device.tablet} {
    margin: 0 auto;
    width: 645px;
    height: auto;

    & h1 {
      font-size: 2.8em;
      padding: 44px 0 0;
    }
    & h2 {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 1px;
      padding: 34px 0 0;
    }
  }

  @media ${device.laptopL} {
    margin: 0;
    width: 56.5%;
    height: auto;
    padding: 0 0 0 150px;

    & h1 {
      font-size: 1.95em;
      padding: 42px 0 0;
      letter-spacing: 1px;
    }
    & h2 {
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 0.5px;
      padding: 44px 0 0;
    }
  }
`;
