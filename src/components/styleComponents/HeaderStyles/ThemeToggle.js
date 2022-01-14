import styled from "styled-components";
import { device } from "../device";

export const ThemeToggle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  align-self: center;

  @media ${device.tablet} {
    text-align: left;
    font-size: 1.5rem;
    margin: 0;
  }

  @media ${device.laptop} {
    font-size: 1.3rem;
  }
  @media ${device.laptopL} {
    font-size: 0.98rem;
    padding-right: 20px;
  }
`;
