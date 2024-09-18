import { React, useState, useEffect } from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { NavLink } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'
import { Link } from 'react-scroll';


const Header = ({
  showModal,
  isModalActive,
  hideMenu, }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}>
      <nav className="header__nav flex-container flex-row txt-center">
        <NavLink onClick={() => {
          ResetLocation()
          hideMenu()
        }} to="/" className="logo-styling flex-container flex-row txt-center "
        >
          <img className="logo" src={logo} alt="Bravo Pizza logo" />
          <h1>
            Bravo <span>Pizza</span>
          </h1>
        </NavLink>
        <ul className={`header__nav__menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>

          <NavLink onClick={() => { ResetLocation(); hideMenu()}} style={({ isActive }) => isActive ? { textDecoration: 'none',  color: '#ff6240', }
              : {}} className="txt-white" to="/">Home</NavLink>

          <Link to="menu" spy={true} smooth={true} offset={-150} duration={500} onClick={hideMenu} className="txt-white">Menu</Link>
          <Link to="about" spy={true} smooth={true} offset={-120} duration={500} onClick={hideMenu} className="txt-white">About</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenu} className="txt-white">Contact</Link>
        </ul>
        <img width="80" height="80" className="header__nav__hamburger" src={isModalActive ? closeMenu : openMenu} alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
    </header>
  )
}


export default Header;