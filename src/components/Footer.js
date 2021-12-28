import react from "react";

function Footer() {

    const year = new Date().getFullYear();

    return <div className="footer"><p className="copyright">Roxan © {year} </p></div>
}

export default Footer;