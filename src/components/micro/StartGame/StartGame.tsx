import React from "react";
import classes from "./StartGame.module.scss";
import classesG from "../../../scss/common.module.scss";
import { StartGameProps } from "../../../types";

export const StartGame: React.FC<StartGameProps> = React.memo(
  ({ paused, started }) => {
    return (
      <div
        className={
          paused
            ? `${classes.container} ${classes.show} ${classesG.titleG}`
            : `${classes.container} ${classes.hide} ${classesG.titleG}`
        }
      >
        Please click button {started ? "'Resume'" : "'Start'"}
      </div>
    );
  }
);
