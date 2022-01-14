import styled from "styled-components";
import { device } from "../device.js";

export const Scover = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 150px;
  padding-left: 70px;

  @media ${device.laptopL} {
    padding-left: 90px;
    transform: scale(0.9);
  }

  &:hover div {
    top: -1px;
    width: 35px;
    height: 8px;
    border-width: 0;
    background-color: ${(props) => props.theme.input};
    border-radius: 20px;

    @media ${device.laptopL} {
    }
  }

  &:hover span {
    top: 50%;
    left: 26px;
    width: 26px;
    margin-top: -9px;
    transform: rotateZ(0);
  }

  &:hover button span:before {
    bottom: 10px;
    transform: rotateZ(52deg);
  }

  &:hover button span:after {
    bottom: -6px;
    transform: rotateZ(-52deg);
  }

  &:hover button span:before,
  &:hover button span:after {
    right: -6px;
    width: 26px;
    background-color: ${(props) => props.theme.input};
  }
`;
