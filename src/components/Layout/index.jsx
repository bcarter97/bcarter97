import Head from "next/head";

const Layout = ({ title = "Home", children }) => (
  <>
    <Head>
      <title>Ben Carter / {title}</title>
    </Head>
    {children}
  </>
);

export default Layout;
