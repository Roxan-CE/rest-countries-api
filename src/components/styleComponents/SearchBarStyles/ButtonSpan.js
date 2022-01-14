import styled from "styled-components";
import { device } from "../device.js";

export const ButtonSpan = styled.span`
  position: absolute;
  top: 28px;
  left: 16px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(48deg);
  transition: 0.5s ease all;

  ::before,
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 7px;
    background-color: ${(props) => props.theme.input};
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }
`;
