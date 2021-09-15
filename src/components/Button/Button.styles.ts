import styled from "styled-components";
import colors from "utils/styled/colors";
import media from "utils/styled/media.styles";

interface ButtonWrapperProps {
  isFilled?: boolean;
  margin?: string;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  width: auto;
  height: 48px;
  max-height: 48px;
  border-radius: 8px;
  border: 2px solid ${colors.lightBlue};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isFilled }) =>
    isFilled ? colors.lightBlue : colors.white};
  ${({ margin }) => margin && `margin: ${margin};`}
  cursor: pointer;

  ${media.desktop} {
    height: 56px;
    max-height: 56px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 11px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p<{ isFilled?: boolean; isArrow?: boolean }>`
  color: ${({ isFilled }) => (isFilled ? colors.white : colors.lightBlue)};
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  ${({ isArrow }) => isArrow && "margin-right: 16px;"}

  ${media.desktop} {
    line-height: 24.51px;
    ${({ isArrow }) => isArrow && "margin-right: 15px;"}
  }
`;
