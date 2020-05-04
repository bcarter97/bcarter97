import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { words } from "./words/words";
import "./index.css";

function generateTeams(gameId) {
  let blueSquares = 8;
  let redSquares = 9;
  let bombs = 1;
  const blueTeam = new Array(blueSquares).fill("blue");
  const redTeam = new Array(redSquares).fill("red");
  const bombTeam = new Array(bombs).fill("bomb");
  const uncoveredTeam = Array(25 - (blueSquares + redSquares + bombs)).fill(
    "neutral"
  );
  const allTeams = blueTeam.concat(redTeam, bombTeam, uncoveredTeam);
  return shuffle(allTeams.slice(), gameId);
}

function generateWords(numberOfWords, randomSeed) {
  return shuffle(words.slice(), randomSeed).slice(0, numberOfWords);
}

function shuffle(a, randomSeed) {
  let rand = require("random-seed").create(randomSeed.toString());

  for (let i = a.length - 1; i > 0; i--) {
    const j = rand.intBetween(0, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Square({ team, value, onClick, clicked, covered }) {
  function squareColour(team) {
    let teamColor = "";
    if (covered && !clicked) {
      return "has-background-light";
    } else {
      if (!clicked) {
        // if uncovered
        switch (team) {
          case "blue":
            teamColor = "has-background-light has-text-info";
            break;
          case "red":
            teamColor = "has-background-light has-text-danger";
            break;
          case "bomb":
            teamColor = "has-background-grey has-text-black is-outlined";
            break;
          case "neutral":
            teamColor = "has-background-light";
            break;
          default:
            break;
        }
        return teamColor;
      } else {
        switch (team) {
          case "blue":
            teamColor = "has-background-info has-text-black";
            break;
          case "red":
            teamColor = "has-background-danger";
            break;
          case "bomb":
            teamColor = "has-background-black has-text-white is-outlined";
            break;
          case "neutral":
            teamColor = "has-background-warning";
            break;
          default:
            break;
        }
        return teamColor;
      }
    }
  }

  return (
    <div className={`square button ${squareColour(team)}`} onClick={onClick}>
      <b>{value}</b>
    </div>
  );
}

function Game({ gameId }) {
  const randomWords = generateWords(25, gameId);
  const randomTeams = generateTeams(gameId);

  const [spyMaster, setSpyMaster] = useState(true);
  const [covered, setCovered] = useState(new Array(25).fill(true));
  const [clicked, setClicked] = useState(new Array(25).fill(false));
  const [blueSquares, setBlueSquares] = useState(8);
  const [redSquares, setRedSquares] = useState(9);

  function renderSquare(i) {
    return (
      <Square
        value={<>{randomWords[i]}</>}
        team={randomTeams[i]}
        covered={covered[i]}
        clicked={clicked[i]}
        onClick={() => {
          if (covered[i]) {
            const newCovered = covered.slice();
            newCovered[i] = false;
            setCovered(newCovered);
          }
          if (!clicked[i]) {
            const newClicked = clicked.slice();
            newClicked[i] = true;
            setClicked(newClicked);
            if (randomTeams[i] === "blue") {
              setBlueSquares(blueSquares - 1);
            } else if (randomTeams[i] === "red") {
              setRedSquares(redSquares - 1);
            }
          }

          // handleCoverChange();
        }}
      />
    );
  }

  function CreateGameBoard() {
    let board = [];
    // Outer loop to create parent
    let squareCounter = 0;
    let rowCounter = 0;
    for (let i = 0; i < 5; i++) {
      let boardRow = [];
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        boardRow.push(
          <div key={squareCounter}>{renderSquare(squareCounter)}</div>
        );
        squareCounter++;
      }
      //Create the parent and add the children
      board.push(
        <div key={rowCounter} className="board-row field is-grouped">
          {boardRow}
        </div>
      );
      rowCounter++;
    }
    return board;
  }

  return (
    <>
      <GameInfo
        gameId={gameId}
        blueSquares={blueSquares}
        redSquares={redSquares}
      />
      <br />
      <div className="board-container">
        <div className="game">
          <div className="game-board">
            <CreateGameBoard />
          </div>
        </div>
      </div>
      <br />
      <div className="columns">
        <div className="column is-4" />
        <div className="column is-2">
          <SpyMasterButton
            spyMaster={spyMaster}
            setSpyMaster={setSpyMaster}
            setCovered={setCovered}
          />
          <br />
        </div>
        <div className="column is-2">
          <NewGameButton />
        </div>
        <div className="column is-4"></div>
      </div>
    </>
  );
}

function GameInfo({ gameId, blueSquares, redSquares }) {
  return (
    <section className="hero is-light is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Game {gameId}</h1>
          <h2 className="subtitle">
            <p className="has-text-info">Blue: {blueSquares}</p>
            <p className="has-text-danger">Red: {redSquares}</p>
          </h2>
        </div>
      </div>
    </section>
  );
}

function SpyMasterButton({ spyMaster, setSpyMaster, setCovered }) {
  return (
    <div
      className="button is-success spymaster-switch"
      onClick={() => {
        setSpyMaster(!spyMaster);
        spyMaster
          ? setCovered(new Array(25).fill(false))
          : setCovered(new Array(25).fill(true));
      }}
    >
      Spymaster view
    </div>
  );
}

function NewGameButton() {
  return (
    <NavLink
      to={`/codewords/` + Math.floor(Math.random() * 99999)}
      className="button new-game is-warning"
    >
      New game
    </NavLink>
  );
}

function GameBoard({ match }) {
  const {
    params: { gameId },
  } = match;
  return <Game gameId={gameId} />;
}

export { GameBoard };
