import styled from "styled-components";
import { device } from "../device.js";

export const Flag = styled.div`
  margin: 70px auto 45px;
  width: 100%;
  height: 240px;

  @media ${device.mobileL} {
    height: 300px;
    width: 80%;
  }

  @media ${device.tablet} {
    margin: 130px auto 45px;
    width: 100%;
    height: 458px;
  }

  @media ${device.laptopL} {
    margin: 0;
    width: 60%;
    height: 400px;
  }
`;
