import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';

import { acceptObj, declineObj } from '../reducers/cookieActions';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../home/Index';
import { ContactPage } from '../contact/Contact';
import { SignUp } from '../auth/SignUp';
import { Login } from '../auth/Login';
import { Reset } from '../auth/Reset';
import { ProtectedRoute, UnprotectedRoute } from '../auth/ProtectedRoute';
import { CookieBar } from '../components/Cookies';
import { history } from '../helpers/history';
import { Profile } from '../profile/Profile';

function App() {
  const { pathname } = useLocation();
  const cookieReducer = useSelector((state) => state.cookieReducer);
  const dispatch = useDispatch();

  const trackPageView = (location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  };

  const initGa = (history) => {
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
    <div className="layout-default">
      <Nav />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <UnprotectedRoute exact path="/signup" component={SignUp} />
        <UnprotectedRoute exact path="/login" component={Login} />
        <UnprotectedRoute exact path="/reset/:token" component={Reset} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
      <CookieBar />
    </div>
  );
}

export default App;
