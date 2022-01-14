import styled from "styled-components";
import { device } from "../device.js";

export const CardBody = styled.div`
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
      font-size: 1.14rem;
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
