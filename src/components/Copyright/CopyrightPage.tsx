import React from "react";
import { GameContainer } from "../GameContainer/GameContainer";
import { CopyrightContent } from "./CopyrightContent";

export const CopyrightPage: React.FC = () => {
  return (
    <GameContainer>
      <CopyrightContent />
    </GameContainer>
  );
};
