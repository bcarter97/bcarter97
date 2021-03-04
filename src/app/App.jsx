import { Route, Router, Switch } from "react-router-dom";

import { Background, Nav } from "../components";
import { Contact, Home, NotFound } from "../pages";
import { history } from "../util/common";

const routes = [
  { path: "/", name: "Home", exact: true, Component: Home },
  { path: "/contact", name: "Contact", exact: true, Component: Contact },
];

const App = () => {
  return (
    <>
      <Background />
      <div className="layout-default">
        <Router history={history}>
          <Nav />
          <div className="container">
            <Switch>
              {routes.map(({ path, exact, Component }) => (
                <Route
                  key={path}
                  exact={exact}
                  path={path}
                  component={Component}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
