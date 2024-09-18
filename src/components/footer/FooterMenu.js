import React from "react";
import { Link } from 'react-scroll';
const FooterMenu = () => {
  return (
    <ul className="footer__menu  flex-container flex-column">
       <Link to="menu" spy={true} smooth={true} offset={-150} duration={500} className="txt-white">Menu</Link>
          <Link to="about" spy={true} smooth={true} offset={-120} duration={500} className="txt-white">About</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="txt-white">Contact</Link>
        
     
    </ul>
  );
}
export default FooterMenu
