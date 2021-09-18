import React, { FC } from "react";

import * as Styled from "./Layout.styles";

import Navbar from "components/Navbar/Navbar";
import Head from "components/Head/Head";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head title={"Ehya"} description={"Recruitment task"} />
      <Navbar />
      <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>
    </>
  );
};

export default Layout;
