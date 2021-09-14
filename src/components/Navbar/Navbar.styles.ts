import styled from "styled-components";
import media from "utils/styled/media.styles";

export const NavbarWrapper = styled.header`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 272px;
  height: 64px;
  margin: 0 18px;

  ${media.desktop} {
    max-width: 1140px;
    height: 100px;
    margin: 0 150px;
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
  ${media.desktop} {
    display: inline-flex;
  }
`;
