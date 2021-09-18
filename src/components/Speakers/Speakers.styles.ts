import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const SpeakersWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  height: 2139px;
  background: linear-gradient(
    180deg,
    #f8fbff 0%,
    rgba(250, 251, 251, 0.0001) 100%
  );
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    min-width: 1440px;
    height: 861px;
  }
`;

export const Container = styled.div`
  width: 320px;
  height: 2139px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${media.desktop} {
    width: 1142px;
    height: 624px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Oval = styled.div`
  width: 91px;
  height: 24px;
  background-color: rgba(54, 179, 126, 0.1);
  border-radius: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 50px;
  text-align: center;

  ${media.desktop} {
    width: 101px;
    height: 32px;
    margin-bottom: 16px;
    margin-top: 0;
  }
`;

export const Title = styled.h4`
  color: ${colors.oceanGreen};
  width: 67px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const Headline = styled.h1`
  font-family: "HK Grotesk", sans-serif;
  color: ${colors.darkBlue};
  width: 272px;
  height: 72px;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.2px;
  margin-bottom: 48px;
  text-align: center;

  ${media.desktop} {
    width: 410px;
    height: 48px;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 64px;
  }
`;

export const TilesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  ${media.desktop} {
    width: 1142px;
    height: 464px;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 31px;
  }
`;
