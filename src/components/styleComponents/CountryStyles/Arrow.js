import styled from "styled-components";
import { device } from "../device.js";

export const Arrow = styled.div`
  width: 60%;
  height: 3px;
  background-color: ${(props) => props.theme.text};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 3px;
    left: -2px;
    background-color: ${(props) => props.theme.text};
  }

  ::before {
    top: 4px;
    transform: rotate(45deg);
  }

  ::after {
    top: -4px;
    transform: rotate(-45deg);
  }

  @media ${device.tablet} {
    width: 80%;
    height: 3px;

    ::before,
    ::after {
      width: 35%;
      height: 3px;
      left: -2px;
    }

    ::before {
      top: 4px;
    }

    ::after {
      top: -4px;
    }
  }
`;
