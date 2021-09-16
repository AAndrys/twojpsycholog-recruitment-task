import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const SponsorsWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 272px;
    height: 1px;
    background-color: ${colors.lightGray};
  }

  ${media.desktop} {
    margin-bottom: 114px;
    &::before {
      width: 0;
      height: 0;
    }
  }
`;

export const Content = styled.div`
  width: 286px;
  height: 277px;
  margin: 0 17px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.desktop} {
    width: 1140px;
    height: 115px;
    margin: 0 150px;
  }
`;

export const SponsorsContainer = styled.div`
  width: 285.5px;
  height: 121px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5px;
  grid-row-gap: 25px;
  margin-bottom: 65px;

  ${media.desktop} {
    width: 1140px;
    height: 32.07px;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-family: HK Grotesk;
  color: ${colors.darkBlue};
  width: 272px;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  margin-bottom: 43px;
  text-align: center;

  ${media.desktop} {
    width: 434px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 50.93px;
  }
`;

export const Image = styled.img`
  min-width: 138.18px;
  min-height: 23.27px;
  max-width: 142.5px;
  max-height: 24px;

  ${media.desktop} {
    width: 190px;
    max-width: 190px;
    max-height: 32px;
  }
`;
