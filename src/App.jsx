import { useLayoutEffect, useState } from "react";
import { Route, Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Nav from "./components/Nav";
import { Contact, Home, Profile } from "./containers";
import { history } from "./util/history";

const useWindowSize = () => {
  const [height, setHeight] = useState(undefined);
  useLayoutEffect(() => {
    const updateHeight = () => {
      setHeight(document.documentElement?.clientHeight || window.innerHeight);
    };
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return height;
};

const routes = [
  { path: "/", name: "Home", exact: true, Component: Home },
  { path: "/contact", name: "Contact", exact: true, Component: Contact },
  { path: "/profile", name: "Profile", exact: false, Component: Profile },
];

const App = () => {
  const height = useWindowSize();

  return (
    <div className="layout-default" style={{ minHeight: height }}>
      <Router history={history}>
        <Nav />
        <div className="container">
          {routes.map(({ path, exact, Component }) => (
            <Route key={path} exact={exact} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
    </div>
  );
};

export default App;
