import styled from "styled-components";
import { device } from "../device.js";

export const MainDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
`;
export const CountryBody = styled.div`
  margin: 0 20px;

  @media ${device.mobileL} {
    padding: 0 36px;
  }

  @media ${device.tablet} {
    padding: 0 36px;
  }
  @media ${device.laptopL} {
    padding: 0 60px;
  }
`;
