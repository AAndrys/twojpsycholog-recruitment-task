import styled from "styled-components";
import media from "utils/styled/media.styles";

export const NavbarWrapper = styled.header`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 272px;
  height: 64px;
  margin: 0 18px;

  ${media.desktop} {
    width: 1140px;
    height: 100px;
    margin: 0 150px;
  }
`;

export const RightContainer = styled.div`
  display: none;

  ${media.desktop} {
    display: inline-flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksWrapper = styled.nav`
  display: none;

  ${media.desktop} {
    display: inline-flex;
  }
`;

export const MenuImage = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${media.desktop} {
    display: none;
  }
`;
