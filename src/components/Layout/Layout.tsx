import React, { FC } from "react";

import * as Styled from "./Layout.styles";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
};

export default Layout;
