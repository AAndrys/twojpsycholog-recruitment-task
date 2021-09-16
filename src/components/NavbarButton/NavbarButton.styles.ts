import styled from "styled-components";
import colors from "utils/styled/colors";
import media from "utils/styled/media.styles";

interface ButtonWrapperProps {
  buttonHeight?: number;
  isFilled?: boolean;
  margin?: string;
}

export const NavbarButtonWrapper = styled.div<ButtonWrapperProps>`
  width: 131px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${colors.lightBlue};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  margin-left: 20px;
  cursor: pointer;
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
  width: 83px;
  height: 22px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
`;
