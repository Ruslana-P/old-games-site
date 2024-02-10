import classes from "./App.module.scss";
import React from "react";
import { GameCard } from "./components/GameCard/GameCard";
import { gameCardInfo } from "./helpers/constants";
import { CopyrightBtn } from "./components/Copyright/CopyrightBtn";

function App() {
  const [puzzleGame, memoryGame, ticTacTocGame] = gameCardInfo;

  const card1Image = require("./images/15-puzzles-game.jpg");
  const card2Image = require("./images/memory-game.jpg");
  const card3Image = require("./images/tic-tac-game.jpg");

  return (
    <div className={classes.App}>
      <div className={classes.appContainer}>
        <h1>It is time to get nostalgic</h1>
        <h3>Click on one of the buttons and feel like it's the '90s again.</h3>
        <div className={classes.cardsContainer}>
          <GameCard
            title={puzzleGame.cardName}
            src={card1Image}
            descr={puzzleGame.cardDescr}
            to={puzzleGame.cardLink}
          />
          <GameCard
            title={memoryGame.cardName}
            src={card2Image}
            descr={memoryGame.cardDescr}
            to={memoryGame.cardLink}
          />
          <GameCard
            title={ticTacTocGame.cardName}
            src={card3Image}
            descr={ticTacTocGame.cardDescr}
            to={ticTacTocGame.cardLink}
          />
          <CopyrightBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
