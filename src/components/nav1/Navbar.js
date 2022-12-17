import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import Hamburger from 'hamburger-react'
import NavLinks from "./NavLinks";
import {useScroll, useWindowDimensions} from "./hooks";
import { links } from "./links";

import './navbar.css';

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { isScrolled } = useScroll();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // set width for hamburger
    if (width > 1028) {
      setIsOpen(false)
    }
  },[width])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <NavContainer>
      <Nav isScrolled={isScrolled}>
        <div id='logo-wrapper'>
          <a href="/" className="logo">
            NAME
          </a>
        </div>
        <NavLinks />
        <button id='action-btn' type='button'>ACTION</button>
        <HamburgerWrapper>
          <Hamburger className='hamburger-react' toggled={isOpen} toggle={setIsOpen}/>
        </HamburgerWrapper>
      </Nav>
      {isOpen ? 
      <MobileMenuWrapperOuter>
        <MobileMenuWrapperInner>
          {Object.keys(links).map((link) => (
            <div>
              <p style={{fontSize:'1.2rem'}}>
                <a href={links[link]}>{link}</a>
              </p>
            </div>
          ))}
        </MobileMenuWrapperInner>
      </MobileMenuWrapperOuter>
       : null}
    </NavContainer>

  );
};

export default Navbar;


const MobileMenuWrapperOuter = styled.div`
  position:fixed;
  height:calc(100vh - 70px);
  top:70px;
  width:100vw;
  zIndex:98;
  backdropFilter:blur(5px);
`;

const MobileMenuWrapperInner = styled.div`
  padding:60px 16px 0px;
  overflow:hidden;
  zIndex:99;
  position:absolute;
  right:0px;
  height:${props => props.height - 70}px;
  width:350px;
  background:var(--bg);
  color:#fff;
`;

const NavContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(177, 177, 177, 0.8);
  font-size:17px;
  background: var(--bg);
  color: var(--textLight);
  transition: all 150ms linear;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 60px;
  z-index: 2;

  #logo-wrapper {
    margin-left:6vw;
  }
  
  #action-btn {
    cursor:pointer;

    height:71px;
    width:147px;

    margin-right:6vw;
    margin-left: auto;
    padding:5px 10px 5px 10px;
    border:none;
    background: white;
    font-size: 16px;
    transition: 0.6s;
    &:hover {
      background:#c4c4c4;
    }
  }

  @media screen and (max-width: 1268px) {
    padding: 0 0px;
    
    #logo-wrapper {
      margin-left:5vw;
    }

    #action-btn {
      margin-right:5vw;
    }
  }

  @media screen and (max-width: 1028px) {
    padding: 0 0px;

    #logo-wrapper {
      margin-left:2vw;
    }

    #action-btn {
      margin-right:0vw;

    }
  }

  .logo {
    flex: 2;
    color: var(--text);
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    #logo-wrapper {
      margin-left:1vw;
    }

    #action-btn {
      margin-right:0;
    }
  }

  .nav-links {
    @media screen and (max-width: 1028px) {
      display: none;
    }
    
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 1028px) {
      display: block;
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  margin-left:10px;
  margin-right:10px;
  @media screen and (max-width: 1028px) {
    display: block;
  }
`;