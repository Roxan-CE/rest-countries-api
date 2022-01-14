import styled from "styled-components";
import { device } from "../device.js";

export const Backbutton = styled.button`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  padding: 12px 30px 10px 24px;
  margin: 50px 0;
  border: 0;
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.element};
  }

  &:hover div {
    & div {
      background: ${(props) => props.theme.element};
    }
    ::before,
    ::after {
      background: ${(props) => props.theme.element};
    }
  }

  @media ${device.tablet} {
    padding: 14px 46px 10px 60px;
    margin: 80px 0;
    border: 0;
    font-size: 1.7rem;
  }

  @media ${device.laptopL} {
    padding: 9px 40px 1px 20px;
    margin: 80px 0;
    border: 0;
    font-size: 0.92rem;
  }
`;
