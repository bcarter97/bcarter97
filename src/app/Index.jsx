import React from 'react';
import ReactGA from 'react-ga';

import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Route, Router, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../home/Index';
import { GameHome } from '../codewords/Index';
import { ContactPage } from '../contact/Contact.jsx';

import { history } from '../helpers/history.js';

// Initialize google analytics page view tracking
ReactGA.initialize(process.env.REACT_APP_GA_ID);

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  const { pathname } = useLocation();

  return (
    <Router history={history}>
      <div className="layout-default">
        <Nav />
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          <Route path="/codewords" component={GameHome} />
          <Route path="/contact" component={ContactPage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
