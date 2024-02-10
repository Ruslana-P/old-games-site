import React from "react";
import { GameContainer } from "../GameContainer/GameContainer";
import { TicTacToeLogic } from "./TicTacToeLogic";

export const TicTacToeGame: React.FC = () => {
  return (
    <GameContainer>
      <TicTacToeLogic />
    </GameContainer>
  );
};
