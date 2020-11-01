import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import { Accept } from "../auth/Accept";
import { Confirm } from "../auth/Confirm";
import { Login } from "../auth/Login";
import { NotFound } from "../auth/NotFound";
import { ProtectedRoute, UnprotectedRoute } from "../auth/ProtectedRoute";
import { Reset } from "../auth/Reset";
import { SignUp } from "../auth/SignUp";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ContactPage } from "../contact/Contact";
import { Home } from "../home/Index";
import wave from "../images/wave.svg";
import { Profile } from "../profile/Profile";

function App() {
  const { pathname } = useLocation();

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
    </div>
  );
}

export default App;
