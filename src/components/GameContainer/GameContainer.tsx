import React from "react";
import classes from "./GameContainer.module.scss";
import { BackBtn } from "../micro/BackBtn/BackBtn";
import { GameContainerProps } from "../../types";

export const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cnt}>
        <BackBtn />
        {children}
      </div>
    </div>
  );
};
