import "../styles/globals.css";

import { Navbar } from "components";
import { ThemeContext } from "context";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContext>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext>
  );
};

export default App;
