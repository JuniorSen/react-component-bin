"use client"; // This is a client component 


import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
// import { useMenuContext } from "../../../state";
import Hamburger from 'hamburger-react'
import NavLinks from "./NavLinks";
import {useScroll} from "../../../hooks";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { links, navItems } from "./links";
import { Dropdown } from "./Dropdown" 

const DesktopNavbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { isScrolled } = useScroll();
  const { width, height } = useWindowDimensions();


  useEffect(() => {
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
    <React.Fragment>
      <DesktopNav isScrolled={isScrolled}>
        <div id='logo-wrapper'>
          <Link href="/" className="logo">
            Sample Management
          </Link>
        </div>
        <NavLinks />

        <button id='login-btn' style={{height:'46px',width:'147px', border:'none',padding:'5px 10px 5px 10px', fontSize:'16px',marginLeft:'auto', cursor:'pointer'}} type='button'>Login</button>
        <HamburgerWrapper>
          <Hamburger className='hamburger-react' toggled={isOpen} toggle={setIsOpen}/>
        </HamburgerWrapper>
      </DesktopNav>
      {isOpen ? 
      <div style={{position:'fixed',height:'calc(100vh - 45px)',top:'45px', width:'100vw', zIndex:'98', backdropFilter:'blur(5px)'}}>
        <div style={{padding:'45px 16px 0px',overflow:'hidden', zIndex:'99',position:'absolute',right:'0px',height:height-45 +'px',width:'350px',background:'var(--bg)',color:'#fff'}}>
          {Object.keys(links).map((link) => (
            <div style={{}}>
              <p style={{fontSize:'1.2rem'}}><a href={links[link]}>{link}</a></p>

            </div>
          ))}
        </div>
      </div>
       : null}
    </React.Fragment>

  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  // box-shadow: var(--headerBoxShadow);
  border-bottom: 1px solid rgba(177, 177, 177, 0.8);
  font-size:17px;
  background: var(--bg);
  color: var(--textLight);
  transition: all 150ms linear;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    padding: 0 45px;
    z-index: 2;

    #logo-wrapper {
      margin-left:6vw;
    }
  
    #login-btn {
      margin-right:6vw;
      background: white;

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
  
      #login-btn {
        margin-right:5vw;
      }
    }

  @media screen and (max-width: 1028px) {
    padding: 0 0px;

    #logo-wrapper {
      margin-left:2vw;
    }

    #login-btn {
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

    #login-btn {
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
`