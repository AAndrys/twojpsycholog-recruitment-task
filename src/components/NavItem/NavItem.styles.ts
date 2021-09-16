import styled from "styled-components";
import colors from "utils/styled/colors";

export const NavItemWrapper = styled.div`
  margin: 0 20px;
`;

export const LinkItem = styled.a<{ isDownList?: boolean }>`
  text-decoration: none;
  color: ${colors.darkBlue};
  font-weight: 600;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  ${({ isDownList }) =>
    isDownList &&
    `&::after {
    content: '';
    width: 9px;
    height: 8px;
    background-image: url('svgs/angleDown.svg');
    display: inline-block;
    margin-left: 4px;
  }`}
`;
