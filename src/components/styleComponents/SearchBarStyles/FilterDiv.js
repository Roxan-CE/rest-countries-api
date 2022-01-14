import styled from "styled-components";
import { device } from "../device.js";

export const FilterDiv = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 30%;
  }
`;
