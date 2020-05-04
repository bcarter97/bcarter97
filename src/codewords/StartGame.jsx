import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function StartGame() {
  const [inputGameId, setinputGameId] = useState("");

  return (
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
      <div className="columns">
        <div className="column is-4" />
        <div className="column is-4 notification is-primary">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                value={inputGameId}
                type="number"
                onChange={(e) => setinputGameId(e.target.value)}
                placeholder="Game id"
              />
            </div>
            <div className="control">
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
        <div className="column is-4" />
      </div>
    </>
  );
}

export { StartGame };
