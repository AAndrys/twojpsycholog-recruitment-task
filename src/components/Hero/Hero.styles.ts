import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const HeroWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 78px;

  ${media.desktop} {
    margin-top: 32px;
    margin-bottom: 106px;
  }
`;

export const Content = styled.div`
  width: 272px;
  height: 745px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "b"
    "a";

  ${media.desktop} {
    width: 1204px;
    height: 588px;
    margin-left: 150px;
    margin-right: 86px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "a b";
  }
`;

export const TextSideContainer = styled.div`
  grid-area: a;

  ${media.desktop} {
  }
`;

export const ImageSideContainer = styled.div`
  grid-area: b;

  ${media.desktop} {
  }
`;

export const Title = styled.h1`
  color: ${colors.darkBlue};
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.2px;
  margin-top: 42px;

  ${media.desktop} {
    font-size: 56px;
    line-height: 68px;
    margin-top: 66px;
  }
`;