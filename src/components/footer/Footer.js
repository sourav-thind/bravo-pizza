import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import './footer.css'

const Footer = () => {
  return (
    <Footer>
      <section>
        
      </section>
    <section className="flex-container flex-column txt-center txt-white pop-font">
      <FooterMenu />
      <hr />
      <FooterContact />
    </section>
    </Footer>
  );
}

export default Footer;