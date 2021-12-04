import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function () {
              function changeTheme(inputTheme) {
                if (inputTheme === "dark") {
                  var root = window.document.documentElement;
                  root.classList.remove("light");
                  root.classList.add(inputTheme);
                  localStorage.setItem("theme", inputTheme);
                } else {
                  var root = window.document.documentElement;
                  root.classList.remove("dark");
                  root.classList.add(inputTheme);
                  localStorage.setItem("theme", inputTheme);
                }
              }
              var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
              var localStorageItem = localStorage.getItem("theme");
              
              changeTheme(
                localStorageItem ? localStorageItem : darkQuery.matches ? "dark" : "light"
                );
              })();
            `,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#19d2b2" />
          <meta name="msapplication-TileColor" content="#19d2b2" />
          <meta name="theme-color" content="#19d2b2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
