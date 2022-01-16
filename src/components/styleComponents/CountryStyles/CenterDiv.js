import styled from "styled-components";
import { device } from "../device.js";

export const CenterDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
