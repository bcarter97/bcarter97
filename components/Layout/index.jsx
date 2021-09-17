import Head from "next/head";

const Layout = ({ title = "Home", children }) => {
  return (
    <>
      <Head>
        <title>Ben Carter / {title}</title>
      </Head>
      <div className="container">
        <section className="section default-section">
          <div className="columns is-multiline is-vcentered is-centered">
            <div className="column is-half">
              <div className="box">{children}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
