"use client"; // This is a client component 

import React from "react";
import { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import Link from "next/link";
import { links } from "./links";
import Dropdown from "./Dropdown";

const NavLinks = () => {
  // const { closeMenu } = useMenuContext();
  // const [theme, toggleTheme] = useTheme();

//   <div class="ml-[62px] mobile:hidden" ref={dropdownRef}>
//   <button
//     class="text-dark-grey-100"
//     onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
//   >
//     Hover Menu
//   </button>

//   {isMenuDropDownOpen && <Menu />} // Dropdown
const [dropdown, setDropdown] = useState(false);

// </div>

  return (
    <NavLinksWrapper className="nav-links">
      {Object.keys(links).map((link) => (
        <li key={link}
        style={{height:'100%'}}
        onMouseEnter={() => setDropdown(link)}
        onMouseLeave={() => setDropdown(false)}
        >
          <Link passHref href={links[link]} className="link" style={{margin:'auto',display: 'inline-block', height:'100%'}}>
            <NavLinkWrapper>
              <NavLink>
              {link}
              </NavLink>
            </NavLinkWrapper>
          </Link>
          {dropdown == link && <Dropdown link={dropdown}/>}

        </li>
      ))}
      {/* <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li> */}
    </NavLinksWrapper>
  );
};

export default NavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  position:relative;
  align-items: center;
  list-style: none;
  padding:0;
  margin:0;
  height:100%;
  margin-left:5vw;
  margin-right:5vw;

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      // margin: 0 !important;
    }
  }
`;

export const NavLinkWrapper = styled.div`
  padding-left:16px;
  padding-right:16px;
  height:100%;
  padding-top:12px;
`

export const NavLink = styled.a`
  cursor:pointer;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--textLight);
  margin-top: 100;
  height:100%;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--textLight);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
