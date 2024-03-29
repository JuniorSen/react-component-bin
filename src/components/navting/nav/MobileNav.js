"use client"; // This is a client component 

import React, { useEffect } from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../state";
import { useScrollFreeze, useMedia } from "../../../hooks";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext();
  const { isMobile } = useMedia();
  useScrollFreeze(isMenuOpen);

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
