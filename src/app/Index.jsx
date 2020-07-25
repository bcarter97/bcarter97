import React from 'react';
import { Nav, Footer } from '../components';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../home/Index';
import { GameHome } from '../codewords/Index';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="layout-default">
      <Nav />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <Route path="/codewords" component={GameHome} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
