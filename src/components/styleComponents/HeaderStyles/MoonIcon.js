import styled from "styled-components";
import { device } from "../device.js";

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

export { MoonIcon };
