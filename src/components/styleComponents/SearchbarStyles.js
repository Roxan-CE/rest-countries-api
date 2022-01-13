import styled from "styled-components";
import { device } from "./device.js";

const TopContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100vw;
`;

const SFcontainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
  @media ${device.laptopL} {
    height: 120px;
  }
`;

const SearchBarDiv = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 70%;
  }
`;

const FilterDiv = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 30%;
  }
`;

const CoverDiv = styled.div`
  position: relative;
  margin: 14px -195px;
  padding: 35px;
  background: ${(props) => props.theme.element};
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.075), 0 0 0 10px transparent;
  transform: scale(0.45);

  @media ${device.tablet} {
    margin: 14px -210px;
    transform: scale(0.59);
  }
  @media ${device.laptop} {
    transform: scale(0.45);
    width: 100vw;
    margin: 14px 0px 14px -240px;
    padding: 30px 0px;
    left: 0px;
  }

  @media ${device.laptopL} {
    transform: scale(0.36);
    margin: 0px 0px 14px -380px;
    padding: 30px 0px;
    left: 0px;
  }
`;

const FormInput = styled.form`
  height: 90px;
`;

const TBDiv = styled.div`
  display: table;
  width: 100%;
`;

const Scover = styled.div`
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

const SubmitButton = styled.button`
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

const Scircle = styled.div`
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

const Tdiv = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const TextInput = styled.input`
  color: ${(props) => props.theme.text};
  padding: 0 0 0 60px;
  margin: 0;
  border: 0;
  background-color: transparent;
  height: 96px;
  font-size: 2.5rem;
  line-height: 1;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.input};
  }
`;

const ButtonSpan = styled.span`
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

export {
  CoverDiv,
  FormInput,
  TBDiv,
  Scover,
  SubmitButton,
  Scircle,
  Tdiv,
  TextInput,
  ButtonSpan,
  TopContainer,
  SearchBarDiv,
  FilterDiv,
  SFcontainer,
};
