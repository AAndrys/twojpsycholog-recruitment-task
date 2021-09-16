import React, { FC } from "react";
import Link from "next/link";

import * as Styled from "./NavItem.styles";

export interface NavItemProps {
  label: string;
  href: string;
  isDownList?: boolean;
}

const NavItem: FC<NavItemProps> = ({ label, href, isDownList }) => {
  return (
    <Styled.NavItemWrapper>
      <Link href={href} passHref>
        <Styled.LinkItem isDownList={isDownList}>{label}</Styled.LinkItem>
      </Link>
    </Styled.NavItemWrapper>
  );
};
export default NavItem;
