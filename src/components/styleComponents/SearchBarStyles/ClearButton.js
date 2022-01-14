import styled from "styled-components";
import { device } from "../device.js";

export const ClearButton = styled.button`
  /* display: none; */
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  position: relative;
  font-weight: 300;
  padding: 20px;
  border-radius: 7px;
  margin: 12px 0 0 0;
  display: ${(props) => (props.isNotEmpty ? "block" : "none")};

  @media ${device.laptop} {
  }
`;
