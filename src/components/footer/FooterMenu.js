import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const FooterMenu = () => {
  return (
    <ul className="footer__menu  flex-container flex-column">
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                textDecoration: "none",
                color: "#ff6240",
              }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/menu"
        >
          Menu
        </NavLink>
      </li>

  
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                textDecoration: "none",
                color: "#ff6240",
              }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                textDecoration: "none",
                color: "#ff6240",
              }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        {/* <FooterSocials /> */}
      </li>
    </ul>
  );
}
export default FooterMenu
