import styled from "styled-components";

const MainDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const Backbutton = styled.button`
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  padding: 12px 46px 10px 100px;
  margin: 80px 58px;
  border: 0;
  font-size: 1.7rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
`;

const Icon = styled.div`
  position: absolute;
  top: 280px;
  left: 125px;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 40px;
  height: 30px;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 80%;
  height: 3px;
  background-color: ${(props) => props.theme.text};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  animation: arrow 700ms linear infinite;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 35%;
    height: 3px;
    left: -2px;
    background-color: ${(props) => props.theme.text};
  }

  ::before {
    top: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
  }

  ::after {
    top: -4px;
    transform: rotate(-45deg);
  }
`;

const CountryDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100%;
`;

const Flag = styled.div`
  margin: 130px auto 50px;
  width: 645px;
  height: 460px;
`;

const InfoBox = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  width: 645px;
  height: 600px;

  & h1 {
    font-size: 2.8em;
    font-weight: 600;
    padding: 40px 0 30px;
  }

  & ul {
    list-style-type: none;
    padding: 0;

    & li {
      font-size: 1.6rem;
      font-weight: 200;
      letter-spacing: 1.5px;
      padding: 12px 0;
      & span {
        font-weight: 400;
      }
    }
  }
`;

export { Backbutton, CountryDiv, MainDiv, Arrow, Icon, InfoBox, Flag };
