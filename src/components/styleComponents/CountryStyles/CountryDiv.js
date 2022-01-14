import styled from "styled-components";
import { device } from "../device.js";

export const CountryDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0;

  @media ${device.laptopL} {
    display: inline-flex;
    width: 100%;
  }
`;
