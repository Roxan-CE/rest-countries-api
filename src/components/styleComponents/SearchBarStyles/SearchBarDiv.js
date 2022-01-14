import styled from "styled-components";
import { device } from "../device.js";

export const SearchBarDiv = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 70%;
  }
`;
