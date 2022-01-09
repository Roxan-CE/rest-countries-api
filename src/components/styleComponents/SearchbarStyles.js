import styled from "styled-components";

const CoverDiv = styled.div`
  position: relative;
  margin: 12px -190px;
  padding: 35px;
  background: ${(props) => props.theme.element};
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.075), 0 0 0 10px transparent;
  transform: scale(0.6);
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
  padding-left: 20px;

  &:hover div {
    top: -1px;
    width: 35px;
    height: 8px;
    border-width: 0;
    background-color: ${(props) => props.theme.text};
    border-radius: 20px;
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
    background-color: ${(props) => props.theme.text};
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
  width: 35px;
  height: 35px;
  margin-top: 0;
  border-width: 10px;
  border: 7px solid;
  border-color: ${(props) => props.theme.text};
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
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  width: 100%;
  height: 96px;
  font-size: 2.5rem;
  line-height: 1;
  outline: none;
  ::placeholder {
    color: rgb(201, 201, 201);
  }
`;

const ButtonSpan = styled.span`
  position: absolute;
  top: 30px;
  left: 10px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 26px;
    height: 7px;
    background-color: ${(props) => props.theme.text};
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
};
