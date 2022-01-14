import styled from "styled-components";
import { device } from "../device";

export const StyledHeader = styled.header`
  justify-content: space-between;
  padding: 8% 4.5%;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
  @media ${device.laptop} {
    padding: 5% 4.5%;
  }
  @media ${device.laptopL} {
    padding: 1.5% 4.5%;
  }
`;
