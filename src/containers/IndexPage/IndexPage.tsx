import React, { FC } from "react";

import Layout from "components/Layout/Layout";
import Navbar from "components/Navbar/Navbar";

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <Layout>
      <Navbar />
      <p>hi</p>
    </Layout>
  );
};

export default IndexPage;
