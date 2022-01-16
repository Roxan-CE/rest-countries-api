import styled from "styled-components";
import { device } from "../device.js";

export const TextInput = styled.input`
  color: ${(props) => props.theme.text};
  padding: 0 0 0 60px;
  margin: 0;
  border: 0;
  background-color: transparent;
  height: 96px;
  font-size: 2.5rem;
  line-height: 1;
  outline: none;
  width: 94%;

  &:hover {
    background-color: ${(props) => props.theme.body};
    border-radius: 10px;
  }

  ::placeholder {
    color: ${(props) => props.theme.input};
  }

  @media ${device.tablet} {
    padding: 0 0 0 0px;
    margin: 0 0 0 10px;
    font-size: 2.5rem;

    ::placeholder {
      padding: 0 0 0 60px;
    }
  }

  @media ${device.laptopL} {
    padding: 0 0px 0 30px;
    margin: 0 0 0 30px;
    font-size: 2.5rem;

    ::placeholder {
      padding: 0 0 0 20px;
    }
  }
`;
