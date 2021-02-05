import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcons,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './StyledNavbar'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>SiteLogo</NavLogo>
            <MobileIcons onClick={toggle}>
              <FaBars />
            </MobileIcons>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="service" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Service</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;