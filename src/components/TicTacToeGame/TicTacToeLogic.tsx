import React, { useEffect, useState, useRef, useCallback } from "react";
import classes from "./TicTacToeLogic.module.scss";
import classesG from "../../scss/common.module.scss";
import { FieldElem } from "./FieldElem";
import { pickRandomElement } from "../../helpers/pickRandomElement";
import { winnerLine, TicTacTocInnitialState } from "../../helpers/constants";
import { ModalGameEnded } from "../ModalGameEnded/ModalGameEnded";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { checkWinner } from "../../helpers/TicTacCheckWinner";
import { PreviousResults } from "../PreviousResults/PreviousResults";
import { getDataFromStorage } from "../../helpers/getDataFromStorage";
import { addDataToStorage } from "../../helpers/addDataToStorage";
import { StartGame } from "../micro/StartGame/StartGame";
import {
  EndGameState,
  ticTacTocFieldObject,
  GameHistoryObject,
} from "../../types";

export const TicTacToeLogic: React.FC = () => {
  const [paused, setPaused] = useState(true);
  const [fieldElems, setFieldElems] = useState<ticTacTocFieldObject[]>(
    TicTacTocInnitialState
  );
  const [endGame, setEndGame] = useState<EndGameState>({ end: false });
  const [gameTime, setGameTime] = useState<string | null>(null);
  const [gamesHistory, setGamesHistory] = useState<GameHistoryObject[]>(
    getDataFromStorage("ticTacTocGame")
  );
  const steps = useRef(0);
  const oponentSteps = useRef(0);
  const turn = useRef(true);
  const started = useRef(false);
  const resetTimerRef = useRef<(() => void) | null>(null);

  const clickHandler = useCallback((element: ticTacTocFieldObject) => {
    if (turn.current === false || element.value !== "") {
      return;
    }
    turn.current = !turn.current;
    steps.current += 1;

    setFieldElems((prevFieldElems) =>
      prevFieldElems.map((elem) => {
        return element.id === elem.id ? { ...elem, value: "X" } : elem;
      })
    );
  }, []);

  const startGame = useCallback(() => {
    setTimeout(() => {
      started.current = true;
    }, 1000);
    setPaused(false);
    setGameTime(null);
  }, []);

  const stopGame = useCallback(() => {
    setEndGame({ end: true, result: false });
  }, []);

  const pauseGame = useCallback(() => {
    setPaused(true);
  }, []);

  const resumeGame = useCallback(() => {
    setPaused(false);
  }, []);

  const resetGame = useCallback(() => {
    setPaused(true);
    started.current = false;
    setFieldElems(TicTacTocInnitialState);
    steps.current = 0;
    oponentSteps.current = 0;
    setGameTime(null);
  }, []);

  useEffect(() => {
    //logic for determining  a winner
    if (steps.current >= 2) {
      const result = checkWinner(fieldElems, winnerLine);
      if (result) {
        setTimeout(() => {
          setEndGame({ end: true, result: result === "X" });
        }, 1000);
        return;
      }
      //logic for determining a draw
      if (!result && (steps.current === 5 || oponentSteps.current === 5)) {
        setTimeout(() => {
          setEndGame({ end: true, result: false });
        }, 1000);
        return;
      }
    }

    //logic for oponent steps
    if (!turn.current) {
      const filteredArray = fieldElems.filter((elem) => {
        return elem.value === "";
      });

      if (filteredArray.length === 0) {
        return;
      }

      const nextStep = pickRandomElement(filteredArray);

      setTimeout(() => {
        setFieldElems(
          fieldElems.map((elem) => {
            return elem.id === nextStep.id ? { ...elem, value: "0" } : elem;
          })
        );
        turn.current = !turn.current;
        oponentSteps.current += 1;
      }, 1000);
    }
  }, [fieldElems]);

  useEffect(() => {
    if (
      endGame.end === true &&
      gameTime !== null &&
      endGame.result !== undefined
    ) {
      setGamesHistory((prevGamesHistory) => {
        const updatedGamesHistory = addDataToStorage(
          "ticTacTocGame",
          gameTime,
          endGame.result as boolean,
          prevGamesHistory,
          steps.current
        );
        return updatedGamesHistory;
      });
    }
  }, [endGame, gameTime]);

  return (
    <>
      <div
        data-testid="ticTacField"
        className={`${classesG.gameFiledG} ${classes.ticTacFiled}`}
      >
        {fieldElems.map((elem) => {
          return (
            <FieldElem key={elem.id} clickHandler={clickHandler} elem={elem} />
          );
        })}
        {<StartGame paused={paused} started={started.current} />}
      </div>

      <Stopwatch
        startGame={startGame}
        pauseGame={pauseGame}
        passTime={setGameTime}
        gameEnd={endGame.end}
        stopGame={stopGame}
        resumeGame={resumeGame}
        resetGame={resetGame}
        onResetTimer={(reset) => {
          resetTimerRef.current = reset;
        }}
      />
      <PreviousResults gamesHistory={gamesHistory} />

      {endGame.end && gameTime && endGame.result !== undefined && (
        <ModalGameEnded
          result={endGame.result}
          time={gameTime}
          steps={steps.current}
          onclick={() => {
            setEndGame({ end: false });

            if (resetTimerRef.current) {
              resetTimerRef.current();
            }
            resetGame();
          }}
        />
      )}
    </>
  );
};
