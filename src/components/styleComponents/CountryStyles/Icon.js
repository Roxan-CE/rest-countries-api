import styled from "styled-components";
import { device } from "../device.js";

export const Icon = styled.div`
  position: relative;
  top: 12px;
  left: 2px;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 40px;
  height: 30px;
  cursor: pointer;
  transform: scale(0.9);

  @media ${device.tablet} {
    top: 17px;
    left: -12px;
    transform: scale(1);
  }

  @media ${device.laptopL} {
    top: 4px;
    left: 2px;
    transform: scale(0.55);
  }
`;
