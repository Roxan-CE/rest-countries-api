import styled from "styled-components";
import { device } from "../device.js";

export const MainInfo = styled.div`
  width: 100%;

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
    & div {
      padding: 36px 0 25px 0;

      & p {
        font-size: 1.67rem;
        padding: 4.5px 0;
      }
    }
  }

  @media ${device.laptopL} {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    & div {
      padding: 23px 0 25px 0;
      width: 400px;

      & p {
        font-size: 0.92rem;
        padding: 0 0 10px;
        margin: 0;
        letter-spacing: 0.5px;
      }
    }
  }
`;
