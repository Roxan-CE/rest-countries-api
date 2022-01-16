import styled from "styled-components";
import { device } from "../device.js";

export const StyledCard = styled.div`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  margin: 40px auto;
  height: auto;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1), 0 0 0 10px transparent;

  @media ${device.tablet} {
    margin: 80px auto;
    height: 675px;
    width: 530px;
  }

  @media ${device.laptop} {
    height: 520px;
    width: 400px;
    margin: 0;
  }
  @media ${device.laptopL} {
    height: 332px;
    width: 262px;
    margin: 0;
  }
`;
