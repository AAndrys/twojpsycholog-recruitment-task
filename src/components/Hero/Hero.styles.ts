import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 78px;

  ${media.desktop} {
    width: 100%;
    margin-top: 32px;
    margin-bottom: 106px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "b"
    "a";
  justify-items: center;

  ${media.desktop} {
    width: 1204px;
    height: 588px;
    margin-left: 150px;
    margin-right: 86px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "a b";
    justify-items: inherit;
  }
`;

export const InfoSideContainer = styled.div`
  width: 272px;
  height: 745px;
  margin: 0 24px;
  grid-area: a;

  ${media.desktop} {
    width: 550px;
    height: 100%;
    margin: 0;
  }
`;

export const ImageSideContainer = styled.div`
  width: 108%;
  grid-area: b;

  ${media.desktop} {
    width: auto;
  }
`;

export const Heading = styled.h1`
  font-family: HK Grotesk;
  color: ${colors.darkBlue};
  width: 225px;
  height: 80px;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.2px;
  margin-top: 42px;

  ${media.desktop} {
    width: 392px;
    height: 136px;
    font-size: 56px;
    line-height: 68px;
    margin-top: 66px;
  }
`;

export const Paragraph = styled.p`
  color: ${colors.blueBayoux};
  width: 272px;
  height: 115px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin: 28px 0 32px;

  ${media.desktop} {
    color: ${colors.darkBlue};
    width: 590px;
    height: 72px;
    font-size: 20px;
    line-height: 36px;
    margin: 24px 0 40px;
  }
`;

export const MozaicImage = styled.img`
  width: 368.26px;
  height: 341px;

  ${media.desktop} {
    width: 635px;
    height: 588px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop} {
    margin-top: 0;
    flex-direction: row;
  }
`;
