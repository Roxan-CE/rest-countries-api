import styled from "styled-components";
import { device } from "../device.js";

export const BordersContainer = styled.div`
  width: 100%;

  @media ${device.laptopL} {
    display: inline-flex;
  }
`;
