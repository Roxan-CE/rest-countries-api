import styled from "styled-components";
import { device } from "./device.js";

const DataDiv = styled.div`
  width: 100%;

  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ContainerDiv = styled.div`
  background: transparent;
  font-family: "Nunito Sans", sans-serif;
  padding: 0;
  max-width: 100vw;
  margin: 0 auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media ${device.tablet} {
    width: 100vw;
  }
  @media ${device.laptop} {
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 400px;
    margin: 40px;
  }

  @media ${device.laptopL} {
    width: 336px;
    margin: 40px 1px;
  }
`;

const StyledCard = styled.div`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  margin: 80px auto;
  height: auto;
  border-radius: 6px;
  width: 90%;

  @media ${device.tablet} {
    margin: 80px auto;
    height: 675px;
    width: 530px;
  }

  @media ${device.laptop} {
    height: 520px;
    width: 400px;
    margin: 0;
  }
  @media ${device.laptopL} {
    height: 330px;
    width: 256px;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  height: auto;
  width: 100%;

  @media ${device.tablet} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 320px;
    width: 530px;
    margin: 0;
  }
  @media ${device.laptop} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 260px;
    width: 400px;
    margin: 0;
  }
  @media ${device.laptopL} {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 162px;
    width: 256px;
    margin: 0;
  }
`;

const CardBody = styled.div`
  background: transparent;
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  padding: 20px 40px;
  letter-spacing: 0.5px;

  @media ${device.tablet} {
    padding: 40px 50px;
    letter-spacing: 0.5px;
  }
  @media ${device.laptop} {
    padding: 20px 50px;
  }
  @media ${device.laptopL} {
    padding: 20px 24px;
  }

  & h5 {
    padding: 8px 0;
    font-weight: 800;
    font-size: 1.6rem;

    @media ${device.tablet} {
      padding: 12px 0;
      font-weight: 800;
      font-size: 2.2rem;
    }
    @media ${device.laptop} {
      padding: 10px 0;
      font-size: 2rem;
    }
    @media ${device.laptopL} {
      padding: 2px 0 0;
      font-size: 1.16rem;
    }
  }

  & ul {
    list-style-type: none;
    padding: 10px 0;
    font-size: 1.1rem;

    @media ${device.tablet} {
      padding: 10px 0;
      font-size: 1.7rem;
    }
    @media ${device.laptop} {
      padding: 10px 0;
      font-size: 1.2rem;
    }
    @media ${device.laptopL} {
      padding: 2px 0;
      font-size: 0.85rem;
    }
  }

  & li {
    font-weight: 300;
    padding: 4px 0;

    @media ${device.laptopL} {
      padding: 2px 0;
    }
  }

  & span {
    font-weight: 600;
  }
`;

export { ContainerDiv, StyledCard, StyledImg, CardBody, DataDiv };
