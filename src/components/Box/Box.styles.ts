import styled from "styled-components";
import colors from "utils/styled/colors";

import media from "utils/styled/media.styles";

export const BoxWrapper = styled.div<{ isSecond?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  ${({ isSecond }) => isSecond && "margin-top: 29.8px;"}

  ${media.desktop} {
    margin-top: 0;
    ${({ isSecond }) =>
      isSecond ? "margin-left: 23.5px;" : "margin-right: 23.5px;"}
    ${({ isSecond }) =>
      !isSecond &&
      `&::after {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        right: -23.5px;
        background-color: ${colors.lightGray};
      }`}
  }
`;

export const DoneImage = styled.img`
  margin: 24px 0 16px;
`;

export const Title = styled.h4`
  color: ${colors.darkBlue};
  width: 148px;
  height: 22px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  margin-bottom: 8.2px;
`;

export const Description = styled.p<{ isSecond?: boolean }>`
  color: ${colors.blueBayoux};
  width: ${({ isSecond }) => (isSecond ? "269px" : "174px")};
  height: 84px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;

  ${media.desktop} {
    ${({ isSecond }) => isSecond && "width: 191px;"}
  }
`;
