import styled from "styled-components";
import { device } from "../device.js";

export const SubmitButton = styled.button`
  position: relative;
  display: block;
  width: 20px;
  height: 60px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
`;
