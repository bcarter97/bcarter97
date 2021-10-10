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
