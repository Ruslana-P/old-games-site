import React from "react";
import { GameContainer } from "../GameContainer/GameContainer";
import { PuzzlesLogic } from "./PuzzlesLogic";

export const PuzzleGame = () => {
  return (
    <GameContainer>
      <PuzzlesLogic />
    </GameContainer>
  );
};
