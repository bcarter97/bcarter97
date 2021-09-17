import "styles/globals.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import Navbar from "components/Navbar";
import Background from "components/Particles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
