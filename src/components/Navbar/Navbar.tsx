import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import * as Styled from "./Navbar.styles";

import NavItem from "components/NavItem/NavItem";

export interface NavbarProps {
  //   navbarCMS: navbarCMS;
}

const links = [
  {
    label: "Home",
    href: "/",
    isDownList: false,
  },
  {
    label: "Landing",
    href: "/",
    isDownList: true,
  },
  {
    label: "Pages",
    href: "/",
    isDownList: true,
  },
  {
    label: "Docs",
    href: "/",
    isDownList: false,
  },
  {
    label: "Help",
    href: "/",
    isDownList: false,
  },
];

const Navbar: FC<NavbarProps> = () => {
  return (
    <Styled.NavbarWrapper>
      <Styled.ContentWrapper>
        <Styled.Container>
          <img src={"svgs/logo.svg"} alt="logo" />
          {/* <img src={"svgs/logo.svg"} alt="logo" /> */}
          <Styled.LinksWrapper>
            {links.map((link) => (
              <NavItem
                key={uuidv4()}
                label={link.label}
                href={link.href}
                isDownList={link.isDownList}
              />
            ))}
          </Styled.LinksWrapper>
        </Styled.Container>
      </Styled.ContentWrapper>
    </Styled.NavbarWrapper>
  );
};

export default Navbar;
