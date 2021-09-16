import React, { FC } from "react";
import dynamic from "next/dynamic";

import Layout from "components/Layout/Layout";
import Hero from "components/Hero/Hero";
import Sponsors from "components/Sponsors/Sponsors";

const Speakers = dynamic(() => import("components/Speakers/Speakers"));

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Sponsors />
      <Speakers />
    </Layout>
  );
};

export default IndexPage;
