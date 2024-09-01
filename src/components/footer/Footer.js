import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import './footer.css'

const Footer = () => {
  return (
    <footer className="flex-container flex-column txt-center txt-white pop-font">
      <FooterMenu />
      <hr />
      <FooterContact />
    </footer>
  );
}

export default Footer;