import styled from "styled-components";
import { device } from "../device";

export const DataDiv = styled.div`
  width: 100%;

  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
