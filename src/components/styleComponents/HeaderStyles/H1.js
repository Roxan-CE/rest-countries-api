import styled from "styled-components";
import { device } from "../device";

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 1.7rem;
  padding: 10px;
  margin: 0 auto;
  line-height: 36px;
  align-self: center;

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
    padding-left: 40px;
  }

  @media ${device.laptopL} {
    font-size: 1.4rem;
    padding-left: 20px;
    letter-spacing: 0.5px;
  }
`;
