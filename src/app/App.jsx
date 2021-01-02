import { Route, Router } from "react-router-dom";

import Nav from "../components/nav/Nav";
import { Contact, Home } from "../containers";
import { history } from "../util/history";

const routes = [
  { path: "/", name: "Home", exact: true, Component: Home },
  { path: "/contact", name: "Contact", exact: true, Component: Contact },
];

const App = () => {
  return (
    <div className="layout-default">
      <Router history={history}>
        <Nav />
        <div className="container">
          {routes.map(({ path, exact, Component }) => (
            <Route key={path} exact={exact} path={path} component={Component} />
          ))}
        </div>
      </Router>
    </div>
  );
};

export default App;
