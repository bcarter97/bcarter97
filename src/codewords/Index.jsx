import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartGame } from './StartGame';
import { GameBoard } from './GameBoard';

function GameHome({ match }) {
  const { path } = match;
  return (
    <section className="section">
      <div className="container">
        <Switch>
          <Route exact path={path} component={StartGame} />
          <Route path={`${path}/:gameId`} component={GameBoard} />
        </Switch>
      </div>
    </section>
  );
}

export { GameHome };
