import styled from "styled-components";
import { device } from "../device.js";

export const BorderButton = styled.button`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  text-align: center;
  vertical-align: middle;
  padding: 10px 58px;
  margin: 10px 2px;
  border: 0;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.155rem 0.25rem rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.element};
    border: 2px;
    border-color: ${(props) => props.theme.element};
  }

  @media ${device.tablet} {
    padding: 10px 58px;
    margin: 10px 2px;
    font-size: 1.4rem;
    font-weight: 200;
  }

  @media ${device.laptopL} {
    padding: 5px 25px;
    margin: 10px 5px;
    font-size: 0.8rem;
    font-weight: 200;
    border-radius: 3px;
    display: inline;
    letter-spacing: 0.3px;
  }
`;
