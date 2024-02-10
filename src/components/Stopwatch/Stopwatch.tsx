import classes from "./Stopwatch.module.scss";
import React, { useState, useEffect, useCallback } from "react";
import classesG from "../../scss/common.module.scss";
import { StopwatchProps } from "../../types";
import { formatTime } from "../../helpers/formatTime";
import { StopwatchBtns } from "./StopwatchBtns";

export const Stopwatch: React.FC<StopwatchProps> = ({
  passTime,
  gameEnd,
  stopGame,
  onResetTimer,
  startGame,
  pauseGame,
  resumeGame,
  resetGame,
}) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
    startGame();
  }, [startGame]);

  const handlePauseResume = useCallback(() => {
    setIsPaused(!isPaused);
    isPaused ? resumeGame() : pauseGame();
  }, [isPaused, pauseGame, resumeGame]);

  const handleStop = useCallback(() => {
    setIsActive(false);
    stopGame();
  }, [stopGame]);

  const handleReset = useCallback(() => {
    setTime(0);
    setIsPaused(false);
    resetGame();
    setIsActive(false);
  }, [resetGame]);

  useEffect(() => {
    if (gameEnd) {
      passTime(formatTime(time));
      setIsActive(false);
    }
  }, [gameEnd, passTime, time]);

  useEffect(() => {
    if (onResetTimer) {
      onResetTimer(handleReset);
    }
  }, [onResetTimer, handleReset]);

  return (
    <div
      data-testid="stopwatch"
      className={`${classes.container} ${classesG.additBlocksG}`}
    >
      <span className={classesG.titleG}>Time:</span>
      <h2 className={classes.time}>{formatTime(time)} </h2>
      <StopwatchBtns
        isActive={isActive}
        handleStart={handleStart}
        handleStop={handleStop}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        isPaused={isPaused}
      />
    </div>
  );
};
