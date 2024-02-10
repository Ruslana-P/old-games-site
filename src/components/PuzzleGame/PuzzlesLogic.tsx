import React, { useEffect, useState, useRef, useCallback } from "react";
import classes from "./PuzzlesLogic.module.scss";
import classesG from "../../scss/common.module.scss";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { StartGame } from "../micro/StartGame/StartGame";
import {
  adjacentMappings,
  puzzleNumbers,
  arrayForCheck,
} from "../../helpers/constants";
import { PreviousResults } from "../PreviousResults/PreviousResults";
import { getDataFromStorage } from "../../helpers/getDataFromStorage";
import { addDataToStorage } from "../../helpers/addDataToStorage";
import { ModalGameEnded } from "../ModalGameEnded/ModalGameEnded";
import { GameHistoryObject, EndGameState, PuzzleItem } from "../../types";
import { getFinalArray } from "../../helpers/puzzlesGetFinalArray";

export const PuzzlesLogic: React.FC = () => {
  const [paused, setPaused] = useState(true);
  const [endGame, setEndGame] = useState<EndGameState>({ end: false });
  const [gameTime, setGameTime] = useState<string | null>(null);
  const [gamesHistory, setGamesHistory] = useState<GameHistoryObject[]>(
    getDataFromStorage("puzzleGame")
  );
  const resetTimerRef = useRef<(() => void) | null>(null);
  const steps = useRef(0);
  const started = useRef(false);

  const finalArray = getFinalArray(puzzleNumbers);
  const [items, setItems] = useState<PuzzleItem[]>(finalArray); // to uncoment

  // const [items, setItems] = useState([
  //   { id: 1, value: 1, sortable: false },
  //   { id: 2, value: 2, sortable: false },
  //   { id: 3, value: 3, sortable: false },
  //   { id: 4, value: 4, sortable: false },
  //   { id: 5, value: 5, sortable: false },
  //   { id: 6, value: 6, sortable: false },
  //   { id: 7, value: 7, sortable: false },
  //   { id: 8, value: 8, sortable: false },
  //   { id: 9, value: 9, sortable: false },
  //   { id: 10, value: 10, sortable: false },
  //   { id: 11, value: 11, sortable: true },
  //   { id: 12, value: 12, sortable: false },
  //   { id: 13, value: 13, sortable: false },
  //   { id: 14, value: 14, sortable: true },
  //   { id: 0, value: 0, sortable: true },
  //   { id: 15, value: 15, sortable: true },
  // ]); // to deleete

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (over && active.id !== over.id && over.id === 0) {
      const draggedItemIndex = items.findIndex(
        (item) => item.value === active.id
      );
      const droppedItemIndex = items.findIndex(
        (item) => item.value === over.id
      );

      if (draggedItemIndex !== -1 && droppedItemIndex !== -1) {
        const newItems = [...items];
        [newItems[draggedItemIndex], newItems[droppedItemIndex]] = [
          newItems[droppedItemIndex],
          newItems[draggedItemIndex],
        ];

        const emptyBlockIndex = newItems.findIndex((item) => item.value === 0);
        const adjacentIds = adjacentMappings[emptyBlockIndex];

        for (let i = 0; i < newItems.length; i++) {
          newItems[i] = {
            ...newItems[i],
            sortable: adjacentIds.includes(i) || newItems[i].id === 0,
          };
        }

        setItems(newItems);
        steps.current += 1;
      }
    }
  }

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
    setItems(getFinalArray(puzzleNumbers));
    started.current = false;
    steps.current = 0;
    setPaused(true);
  }, []);

  useEffect(() => {
    if (items[15].value === 0) {
      const isWinner = items.every(
        (item, index) => item.value === arrayForCheck[index]
      );

      if (isWinner) {
        setTimeout(() => {
          setEndGame({ end: true, result: true });
        }, 1000);
      }
    }
  }, [items]);

  useEffect(() => {
    if (endGame.end && gameTime && endGame.result !== undefined) {
      setGamesHistory((prevGamesHistory) => {
        const updatedGamesHistory = addDataToStorage(
          "puzzleGame",
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
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div
            data-testid="puzzlesField"
            className={`${classes.numbersContainer} ${classesG.gameFiledG} }`}
          >
            {items.map((item) => (
              <SortableItem
                key={item.value}
                id={item.value}
                sortable={item.sortable}
              />
            ))}
            {<StartGame paused={paused} started={started.current} />}
          </div>
        </SortableContext>
      </DndContext>

      <Stopwatch
        gameEnd={endGame.end}
        startGame={startGame}
        pauseGame={pauseGame}
        passTime={setGameTime}
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
          }}
        />
      )}
    </>
  );
};
