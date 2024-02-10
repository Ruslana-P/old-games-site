import React from "react";
import classes from "./Stopwatch.module.scss";
import { StopwatchBtnsProps } from "../../types";

export const StopwatchBtns: React.FC<StopwatchBtnsProps> = React.memo(
  ({
    isActive,
    handleStart,
    handleStop,
    handlePauseResume,
    handleReset,
    isPaused,
  }) => {
    return (
      <div className={classes.btns}>
        {!isActive && (
          <button className={classes.btn} onClick={handleStart}>
            Start
          </button>
        )}
        {isActive && (
          <button className={classes.btn} onClick={handleStop}>
            Stop
          </button>
        )}
        {isActive && (
          <button className={classes.btn} onClick={handlePauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        )}
        <button className={classes.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }
);
