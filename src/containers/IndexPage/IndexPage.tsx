import React, { FC } from "react";

import Layout from "components/Layout/Layout";
import Hero from "components/Hero/Hero";

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
