import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';

import { acceptObj, declineObj } from '../reducers/cookieActions';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Route, Router, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../home/Index';
import { GameHome } from '../codewords/Index';
import { ContactPage } from '../contact/Contact';
import { CookieBar } from '../components/Cookies';

import { history } from '../helpers/history';

function App() {
  const { pathname } = useLocation();
  const cookieReducer = useSelector((state) => state.cookieReducer);
  const dispatch = useDispatch();

  // Initialize google analytics page view tracking
  const trackPageView = (location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  };

  const initGa = (history) => {
    console.log('tracking started');
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    trackPageView(history.location);
    history.listen(trackPageView);
  };

  useEffect(() => {
    if (Cookies.get('CookieConsent') === 'true') {
      dispatch(acceptObj);
    } else {
      dispatch(declineObj);
    }
  }, [dispatch]);

  useEffect(() => {
    if (cookieReducer.accept) {
      initGa(history);
    }
    // eslint-disable-next-line
  }, [cookieReducer]);

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
      <CookieBar />
    </Router>
  );
}

export default App;
