import styled from "styled-components";
import colors from "utils/styled/colors";
import media from "utils/styled/media.styles";
import { ButtonProps } from "./Button";

interface ButtonWrapperProps {
  buttonWidth: ButtonProps["buttonWidth"];
  isFilled?: boolean;
  margin?: string;
}

interface ButtonTextProps {
  buttonTextWidth?: ButtonProps["buttonTextWidth"];
  isFilled?: boolean;
  isArrow?: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ buttonWidth }) => buttonWidth?.length && `width: ${buttonWidth[0].x}px;`}
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
    ${({ buttonWidth }) =>
      buttonWidth?.length && `width: ${buttonWidth[1].x}px;`}
    height: 56px;
    max-height: 56px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 11px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p<ButtonTextProps>`
  ${({ buttonTextWidth }) =>
    buttonTextWidth?.length && `width: ${buttonTextWidth[0].x}px;`}
  height: 22px;
  color: ${({ isFilled }) => (isFilled ? colors.white : colors.lightBlue)};
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  ${({ isArrow }) => isArrow && "margin-right: 16px;"}

  ${media.desktop} {
    ${({ buttonTextWidth }) =>
      buttonTextWidth?.length && `width: ${buttonTextWidth[1].x}px;`}
    height: 25px;
    font-size: 18px;
    line-height: 24.51px;
    ${({ isArrow }) => isArrow && "margin-right: 15px;"}
  }
`;
