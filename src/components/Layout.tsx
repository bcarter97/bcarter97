import Head from "next/head";

type LayoutProps = React.PropsWithChildren<{ title?: string }>;

const Layout = ({ title = "Home", children }: LayoutProps) => (
  <>
    <Head>
      <title>Ben Carter / {title}</title>
    </Head>
    {children}
  </>
);

export default Layout;
