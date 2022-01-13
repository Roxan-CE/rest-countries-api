import styled from "styled-components";
import { device } from "./device.js";

const MainDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
`;

const Backbutton = styled.button`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  padding: 12px 32px 10px 68px;
  margin: 80px 30px;
  border: 0;
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.element};
  }

  &:hover div {
    & div {
      background: ${(props) => props.theme.element};
    }
    ::before,
    ::after {
      background: ${(props) => props.theme.element};
    }
  }

  @media ${device.tablet} {
    padding: 12px 46px 10px 100px;
    margin: 80px 58px;
    border: 0;
    font-size: 1.7rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 260px;
  left: 80px;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 40px;
  height: 30px;
  cursor: pointer;

  @media ${device.tablet} {
    top: 282px;
    left: 125px;
  }
`;

const Arrow = styled.div`
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

const CountryDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
`;

const Flag = styled.div`
  margin: 130px 2vw 50px;
  width: 96vw;
  height: 300px;

  @media ${device.tablet} {
    margin: 130px auto 50px;
    width: 645px;
    height: 460px;
  }
`;

const InfoBox = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 80%;
  height: auto;

  & h1 {
    font-size: 2.4em;
    font-weight: 600;
    padding: 30px 0 0;
  }

  & div {
    list-style-type: none;
    padding: 30px 0 20px 0;

    & p {
      font-size: 1.2rem;
      font-weight: 200;
      letter-spacing: 1.6px;
      padding: 5px 0;
      & span {
        font-weight: 400;
      }
    }
  }

  @media ${device.tablet} {
    margin: 0 auto;
    width: 645px;
    height: auto;

    & h1 {
      font-size: 2.8em;
      padding: 38px 0 0;
    }

    & div {
      padding: 36px 0 25px 0;

      & p {
        font-size: 1.65rem;
        padding: 5px 0;
      }

      & h2 {
        font-size: 1.9rem;
      }
    }
  }
`;

const BorderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-around;
`;

const BorderButton = styled.button`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  text-align: center;
  vertical-align: middle;
  padding: 6px 26px;
  margin: 12px;
  border: 0;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.155rem 0.25rem rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.element};
    border: 2px;
    border-color: ${(props) => props.theme.element};
  }

  @media ${device.tablet} {
    padding: 6px 26px;
    margin: 12px;
    font-size: 1.7rem;
    flex-direction: row;

    &:hover {
      border: 2px;
    }
  }
`;

export {
  Backbutton,
  CountryDiv,
  MainDiv,
  Arrow,
  Icon,
  InfoBox,
  Flag,
  BorderButton,
  BorderDiv,
};
