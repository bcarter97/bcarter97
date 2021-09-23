import "styles/globals.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import Navbar from "components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout-default">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
