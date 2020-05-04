import React from "react";
import { Route, Switch } from "react-router-dom";
import { StartGame } from "./StartGame";
import { GameBoard } from "./GameBoard";
import { Body } from "../components";

function GameHome({ match }) {
  const { path } = match;
  return Body(
    <Switch>
      <Route exact path={path} component={StartGame} />
      <Route path={`${path}/:gameId`} component={GameBoard} />
    </Switch>
  );
}

export { GameHome };
