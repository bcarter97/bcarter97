import { Route, Router, Switch } from "react-router-dom";

import { Background, Navbar } from "../components";
import { Contact, Home, NotFound } from "../pages";
import { history } from "../util/common";

const routes = [
  { path: "/", name: "Home", exact: true, Page: Home },
  { path: "/contact", name: "Contact", exact: true, Page: Contact },
];

const App = () => {
  return (
    <>
      <Background />
      <div className="layout-default">
        <Router history={history}>
          <Navbar />
          <div className="container">
            <Switch>
              {routes.map(({ path, exact, Page }) => (
                <Route key={path} exact={exact} path={path} component={Page} />
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
