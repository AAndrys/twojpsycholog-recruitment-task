import React from "react";
import NextHead from "next/head";

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </NextHead>
  );
};

export default Head;
