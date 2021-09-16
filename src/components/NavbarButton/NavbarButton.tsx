import React, { FC } from "react";

import * as Styled from "./NavbarButton.styles";

export interface NavbarButtonProps {
  label: string;
}

const NavbarButton: FC<NavbarButtonProps> = ({ label }) => {
  return (
    <Styled.NavbarButtonWrapper>
      <Styled.Container>
        <Styled.Text>{label}</Styled.Text>
      </Styled.Container>
    </Styled.NavbarButtonWrapper>
  );
};

export default NavbarButton;
