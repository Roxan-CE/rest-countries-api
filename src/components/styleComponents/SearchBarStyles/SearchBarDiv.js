import styled from "styled-components";
import { device } from "../device.js";

export const SearchBarDiv = styled.div`
  width: 100%;

  @media ${device.tablet} {
    margin: 0 auto;
    width: 100%;
  }
  @media ${device.laptop} {
    margin: 0;
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 70%;
  }
`;
