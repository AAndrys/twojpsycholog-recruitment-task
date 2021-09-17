import React from "react";
import NextHead from "next/head";
import colors from "utils/styled/colors";

export interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FunctionComponent<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="images/imagesMosaic.webp" as="image" />
      <meta name="theme-color" content={colors.white} />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </NextHead>
  );
};

export default Head;
