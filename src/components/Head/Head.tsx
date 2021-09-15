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
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5P87F8P');",
        }}
      />
    </NextHead>
  );
};

export default Head;
