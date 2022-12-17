import React from "react";
import styled from "styled-components";
import { links } from "./links";

const NavLinks = () => {
  return (
    <NavLinksWrapper className="nav-links">
      {Object.keys(links).map((link) => (
        <li key={link}>
          <a href={links[link]} className="link">
            <NavLinkWrapper>
              <NavLink>
              {link}
              </NavLink>
            </NavLinkWrapper>
          </a>
        </li>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding:0;

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
`

export const NavLink = styled.a`
  cursor:pointer;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--textLight);
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
