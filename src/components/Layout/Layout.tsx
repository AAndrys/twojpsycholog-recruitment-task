import React, { FC } from "react";
import dynamic from "next/dynamic";

import * as Styled from "./Layout.styles";

import Navbar from "components/Navbar/Navbar";
import Head from "components/Head/Head";

const Footer = dynamic(() => import("components/Footer/Footer"));

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head title={"Ehya"} description={"Recruitment task"} />
      <Navbar />
      <Styled.LayoutWrapper>
        {children}
        <Footer />
      </Styled.LayoutWrapper>
    </>
  );
};

export default Layout;
