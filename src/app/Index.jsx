import React from "react";
import "../App.sass";
import { Nav, Footer } from "../components";
import { Route, Switch } from "react-router-dom";
import { Home } from "../home/Index";
import { CodeWords, GameHome } from "../codewords/Index";

function App() {
  return (
    <div className="layout-default">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/codewords" component={GameHome} />
        <Route exact path="/codewords/:gameId" component={CodeWords} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
