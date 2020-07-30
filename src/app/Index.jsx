import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../home/Index';
import { GameHome } from '../codewords/Index';
import { ContactPage } from '../contact/Contact.jsx';

function App() {
  const { pathname } = useLocation();

  return (
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
  );
}

export default App;
