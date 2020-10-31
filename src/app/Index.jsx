import Cookies from "js-cookie";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import { Accept } from "../auth/Accept";
import { Confirm } from "../auth/Confirm";
import { Login } from "../auth/Login";
import { NotFound } from "../auth/NotFound";
import { ProtectedRoute, UnprotectedRoute } from "../auth/ProtectedRoute";
import { Reset } from "../auth/Reset";
import { SignUp } from "../auth/SignUp";
import { CookieBar } from "../components/Cookies";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ContactPage } from "../contact/Contact";
import { history } from "../helpers/history";
import { Home } from "../home/Index";
import { Profile } from "../profile/Profile";
import { acceptObj, declineObj } from "../reducers/cookieActions";

import wave from "../images/wave.svg";

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
    if (Cookies.get("CookieConsent") === "true") {
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
    <div
      className="layout-default"
      style={{
        backgroundImage: `url(${wave})`,
        height: document.documentElement?.clientHeight || window.innerHeight,
      }}
    >
      <Nav />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <UnprotectedRoute exact path="/signup" component={SignUp} />
        <UnprotectedRoute exact path="/login" component={Login} />
        <Route path="/reset/:token?" component={Reset} />
        <Route exact path="/confirm/:token" component={Confirm} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route exact path="/accept/:token?" component={Accept} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <CookieBar />
    </div>
  );
}

export default App;
