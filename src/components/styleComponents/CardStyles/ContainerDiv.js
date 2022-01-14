import styled from "styled-components";
import { device } from "../device";

export const ContainerDiv = styled.div`
  background: transparent;
  font-family: "Nunito Sans", sans-serif;
  padding: 0;
  max-width: 100vw;
  margin: 0 auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;

  @media ${device.tablet} {
    width: 100vw;
  }
  @media ${device.laptop} {
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 400px;
    margin: 40px;
  }

  @media ${device.laptopL} {
    width: 336px;
    margin: 34px 1px;
  }
`;
