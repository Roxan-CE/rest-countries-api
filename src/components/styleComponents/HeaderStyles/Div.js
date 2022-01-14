import styled from "styled-components";
import { device } from "../device";

export const Div = styled.div`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  padding: 0;
  margin: 0;
  min-width: 100vw;
`;
