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
      <link href="/fonts/global.css" rel="stylesheet" />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </NextHead>
  );
};

export default Head;
