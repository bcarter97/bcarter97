import Layout from "components/Layout";
import NotFound from "components/NotFound";
import Head from "next/head";

const Custom404 = () => (
  <Layout>
    <Head>
      <title>Ben Carter / 404</title>
    </Head>
    <NotFound />
  </Layout>
);

export default Custom404;
