import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import * as Styled from "./Navbar.styles";

import NavItem from "components/NavItem/NavItem";
import NavbarButton from "components/NavbarButton/NavbarButton";

export interface NavbarProps {}

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
          <Image src="/svgs/logo.svg" alt="logo" width={90} height={28} />
          <Styled.MenuImage src={"svgs/menu.svg"} alt="Mobile menu icon" />
          <Styled.RightContainer>
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
            <NavbarButton label={"Get it now"} />
          </Styled.RightContainer>
        </Styled.Container>
      </Styled.ContentWrapper>
    </Styled.NavbarWrapper>
  );
};

export default Navbar;
