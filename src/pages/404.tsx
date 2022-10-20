import React from "react";
import Layout from "../components/layout/Layout";
import { Seo } from "../components/layout/Seo";
import { NotFound } from "../components/NotFound";

export default () => (
  <Layout isHome={false}>
    <NotFound />
  </Layout>
);

export const Head = Seo;
