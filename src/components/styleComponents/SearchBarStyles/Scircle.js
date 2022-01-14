import styled from "styled-components";
import { device } from "../device.js";

export const Scircle = styled.div`
  position: relative;
  top: -8px;
  left: 0;
  width: 40px;
  height: 40px;
  margin-top: 0;
  border-width: 10px;
  border: 7px solid;
  border-color: ${(props) => props.theme.input};
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
`;
