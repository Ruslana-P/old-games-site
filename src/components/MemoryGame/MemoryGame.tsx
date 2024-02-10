import React from "react";
import { GameContainer } from "../GameContainer/GameContainer";
import { MemoryLogic } from "./MemoryLogic";

export const MemoryGame = () => {
  return (
    <GameContainer>
      <MemoryLogic />
    </GameContainer>
  );
};
