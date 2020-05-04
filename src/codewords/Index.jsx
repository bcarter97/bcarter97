import React, { useState } from "react";
import { Game } from "./GameBoard";
import { Route, Switch, NavLink } from "react-router-dom";
import { Body } from "../components";

function CodeWords({ match, location }) {
  const {
    params: { gameId },
  } = match;
  return Body(<Game gameId={gameId} />);
}

function GameHome({ match }) {
  const { path } = match;
  return (
    <Switch>
      <Route exact path={path} component={StartGame} />
      <Route path={`${path}/:gameId`} component={CodeWords} />
    </Switch>
  );
}

function StartGame() {
  const [inputGameId, setinputGameId] = useState("");

  return Body(
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Codewords</h1>
            <h1 className="subtitle">
              Start a new game or join an existing one
            </h1>
          </div>
        </div>
      </section>
      <br />
      <div class="columns">
        <div class="column is-4" />
        <div class="column is-4 notification is-primary">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input
                class="input"
                value={inputGameId}
                type="number"
                onChange={(e) => setinputGameId(e.target.value)}
                placeholder="Game id"
              />
            </div>
            <div class="control">
              <NavLink
                exact
                to={`/codewords/` + inputGameId}
                className="button is-light"
              >
                Join game
              </NavLink>
            </div>
          </div>
          <NavLink
            to={`/codewords/` + Math.floor(Math.random() * 9999)}
            className="button is-light is-fullwidth"
          >
            New game
          </NavLink>
        </div>
        <div class="column is-4" />
      </div>
    </>
  );
}

export { GameHome };
