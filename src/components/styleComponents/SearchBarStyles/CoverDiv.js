import styled from "styled-components";
import { device } from "../device.js";

export const CoverDiv = styled.div`
  position: relative;
  margin: 14px -195px;
  padding: 35px;
  background: ${(props) => props.theme.element};
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.075), 0 0 0 10px transparent;
  transform: scale(0.45);

  @media ${device.tablet} {
    margin: 14px -210px;
    transform: scale(0.59);
  }
  @media ${device.laptop} {
    transform: scale(0.45);
    width: 100vw;
    margin: 14px 0px 14px -240px;
    padding: 30px 0px;
    left: 0px;
  }

  @media ${device.laptopL} {
    transform: scale(0.36);
    margin: 0px 0px 14px -380px;
    padding: 30px 0px;
    left: 0px;
  }
`;
