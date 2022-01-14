import react from "react";
import { FooterDiv } from "./styleComponents/FooterStyles/FooterDiv";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterDiv>
      <p>Roxan © {year} </p>
    </FooterDiv>
  );
}

export default Footer;
