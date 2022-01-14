import styled from "styled-components";
import { device } from "../device.js";

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

export default SFcontainer;
