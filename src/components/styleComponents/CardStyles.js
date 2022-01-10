import styled from "styled-components";

const ContainerDiv = styled.div`
  background: transparent;
  font-family: "Nunito Sans", sans-serif;
  padding: 0;
  max-width: 530px;
  margin: 0 auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StyledCard = styled.div`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  margin: 80px auto;
  height: 675px;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  background: ${(props) => props.theme.element};
  font-family: "Nunito Sans", sans-serif;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 320px;
`;

const CardBody = styled.div`
  background: transparent;
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.text};
  padding: 40px 50px;
  letter-spacing: 0.5px;

  & h5 {
    padding: 12px 0;
    font-weight: 800;
    font-size: 2.2rem;
  }

  & ul {
    list-style-type: none;
    padding: 10px 0;
    font-size: 1.7rem;
  }

  & li {
    font-weight: 300;
    padding: 4px 0;
  }

  & span {
    font-weight: 600;
  }
`;

export { ContainerDiv, StyledCard, StyledImg, CardBody };
