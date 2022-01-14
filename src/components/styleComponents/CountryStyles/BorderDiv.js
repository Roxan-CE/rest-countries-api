import styled from "styled-components";
import { device } from "../device.js";

export const BorderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px 0;

  @media ${device.tablet} {
    padding: 22px 0;
  }

  @media ${device.laptopL} {
    display: inline-block;
    padding: 28px 8px 0;
    width: 70%;
  }
`;
