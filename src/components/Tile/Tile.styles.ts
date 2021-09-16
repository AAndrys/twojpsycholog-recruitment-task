import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const TileWrapper = styled.div<{ isSecond: boolean; }>`
    width: 263px;
    height: 411px;

    ${media.desktop} {
      ${({ isSecond }) => isSecond && 'margin-top: 48px;'}
    }
`;

export const Image = styled.div<{ image: string; }>`
    width: 262px;
    height: 280px;
    margin-bottom: 34px;
    border-radius: 8px;
    filter: drop-shadow(0px 20px 50px rgba(15, 24, 44, 0.15));
    background: url(${({ image }) => image});

    ${media.desktop} {
    }
`;

export const Name = styled.h2`
  font-family: HK Grotesk;
  color: ${colors.darkBlue};
  width: 170px;
  height: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.2px;
  margin-bottom: 18px;
`;

export const Description = styled.p`
  color: ${colors.blueBayoux};
  max-width: 239px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  position: relative;
  margin-left: 24px;

  &:first-child {
    margin-bottom: 7px;
  }

  &::before {
    content: '';
    width: 12px;
    height: 14px;
    background: url(svgs/check.svg);
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: -24px;
    bottom: 2px;
  }
`;