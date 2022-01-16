import styled from "styled-components";
import { device } from "../device.js";

export const StyledImg = styled.img`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  height: 240px;
  width: 100%;

  @media ${device.tablet} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 320px;
    width: 530px;
    margin: 0;
  }
  @media ${device.laptop} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 260px;
    width: 400px;
    margin: 0;
  }
  @media ${device.laptopL} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 160px;
    width: 262px;
    margin: 0;
  }
`;
