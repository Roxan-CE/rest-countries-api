import styled from "styled-components";

const FooterDiv = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  padding: 0;
  margin: 0;

  & p {
    text-align: center;
    width: 200px;
    margin: 0 auto;
    padding: 20px 0 40px;
  }
`;

export { FooterDiv };
