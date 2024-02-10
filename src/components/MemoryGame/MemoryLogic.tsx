import React from "react";
import { useCallback, useEffect, useState, useRef } from "react";
import { shuffleArray } from "../../helpers/shuffleArrayFunction";
import classes from "./MemoryLogic.module.scss";
import classesG from "../../scss/common.module.scss";
import { MemoryCard } from "./MemoryCard";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { StartGame } from "../micro/StartGame/StartGame";
import { ModalGameEnded } from "../ModalGameEnded/ModalGameEnded";
import { generateRandomNumbers } from "../../helpers/generateRandomNumbers";
import { getImage } from "../../helpers/getImage";
import { PreviousResults } from "../PreviousResults/PreviousResults";
import { getDataFromStorage } from "../../helpers/getDataFromStorage";
import { addDataToStorage } from "../../helpers/addDataToStorage";
import {
  MemoryCardObject,
  checkMatchArgs,
  EndGameState,
  GameHistoryObject,
} from "../../types";

export const MemoryLogic = () => {
  const [cards, setCards] = useState<MemoryCardObject[]>([]);
  const [paused, setPaused] = useState(true);
  const [endGame, setEndGame] = useState<EndGameState>({ end: false });
  const [gameTime, setGameTime] = useState<string | null>(null);
  const [gamesHistory, setGamesHistory] = useState<GameHistoryObject[]>(
    getDataFromStorage("memoryGame")
  );

  const openedPairs = useRef(0);
  const resetTimerRef = useRef<(() => void) | null>(null);
  const steps = useRef(0);
  const flippedCards = useRef<string[]>([]);
  const started = useRef(false);

  const createDeck = useCallback(async () => {
    const randomNumbers = generateRandomNumbers();
    const images: MemoryCardObject[] = [];

    for (let i = 0; i < 6; i++) {
      const j = randomNumbers[i];
      const image = await getImage(j);
      images.push({
        id: "a" + i,
        src: image,
        flipped: true,
        matched: false,
      });
      images.push({
        id: "b" + i,
        src: image,
        flipped: true,
        matched: false,
      });
    }
    return shuffleArray(images);
  }, []);

  const handleCardClick = useCallback(
    (id: string) => {
      if (flippedCards.current.length === 2) {
        return;
      }

      setCards((prevCards) =>
        prevCards.map((card) => {
          return card.id === id ? { ...card, flipped: !card.flipped } : card;
        })
      );
      steps.current += 1;
      flippedCards.current = [...flippedCards.current, id];
    },

    []
  );

  const checkMatch: checkMatchArgs = useCallback((cardsArray, cards) => {
    let result: MemoryCardObject[] | [];
    if (cardsArray[0][1] === cardsArray[1][1]) {
      result = cards.map((card) => {
        return card.id === cardsArray[0] || card.id === cardsArray[1]
          ? { ...card, matched: true }
          : card;
      });
      openedPairs.current += 1;
    } else {
      result = cards.map((card) => {
        return card.id === cardsArray[0] || card.id === cardsArray[1]
          ? { ...card, flipped: false }
          : card;
      });
    }
    setTimeout(() => {
      setCards(result);
      flippedCards.current = [];
    }, 1000);
  }, []);

  const startGame = useCallback(async () => {
    if (!started.current) {
      const newCards = await createDeck();
      setCards(newCards);
      setTimeout(() => {
        setCards(newCards.map((card) => ({ ...card, flipped: false })));
        started.current = true;
      }, 1000);
    }
    setPaused(false);
  }, [started, createDeck]);

  const pauseGame = useCallback(() => {
    setPaused(true);
  }, []);

  const resumeGame = useCallback(() => {
    setPaused(false);
  }, []);

  const stopGame = useCallback(() => {
    setEndGame({ end: true, result: false });
  }, []);

  const resetGame = useCallback(() => {
    setGameTime(null);
    started.current = false;
    steps.current = 0;
    flippedCards.current = [];
    openedPairs.current = 0;
    setPaused(true);
  }, []);

  useEffect(() => {
    if (flippedCards.current.length === 2) {
      checkMatch(flippedCards.current, cards);

      if (openedPairs.current === 6) {
        setTimeout(() => {
          setEndGame({ end: true, result: true });
        }, 1000);
      }
    }
  }, [cards, checkMatch]);

  useEffect(() => {
    if (
      endGame.end === true &&
      gameTime !== null &&
      endGame.result !== undefined
    ) {
      setGamesHistory((prevGamesHistory) => {
        const updatedGamesHistory = addDataToStorage(
          "memoryGame",
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
        data-testid="cardsField"
        className={`${classesG.gameFiledG} ${classes.imagesCnt}`}
      >
        {cards.map((item) => {
          return (
            <MemoryCard
              key={item.id}
              id={item.id}
              src={item.src}
              flipped={item.flipped}
              matched={item.matched}
              onClick={handleCardClick}
            />
          );
        })}
        {<StartGame paused={paused} started={started.current} />}
      </div>

      <Stopwatch
        startGame={startGame}
        pauseGame={pauseGame}
        passTime={setGameTime}
        gameEnd={endGame.end}
        resetGame={resetGame}
        resumeGame={resumeGame}
        stopGame={stopGame}
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
