import React from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { NavLink } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'


const Header = ({
  showModal,
  isModalActive,
  hideMenu, }) => {
  return (
    <header>
      <nav className="header__nav flex-container flex-row txt-center">
        <NavLink onClick={() => {
          ResetLocation()
          hideMenu()
        }} to="/" className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img className="logo" src={logo} alt="Bravo Pizza logo" />
          <h1>
            Bravo <span>Pizza</span>
          </h1>
        </NavLink>
        <ul className={`header__nav__menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={()  => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <img
          width="80"
          height="80"
          className="header__nav__hamburger"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
    </header>
  )
}


export default Header;