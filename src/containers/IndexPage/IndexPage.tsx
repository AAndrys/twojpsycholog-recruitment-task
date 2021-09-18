import React, { FC } from "react";
import dynamic from "next/dynamic";

import Layout from "components/Layout/Layout";
import Hero from "components/Hero/Hero";
import Sponsors from "components/Sponsors/Sponsors";
import Speakers from "components/Speakers/Speakers";

const Footer = dynamic(() => import("components/Footer/Footer"));

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Sponsors />
      <Speakers />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
