import { getCurrentDate } from "./getCurrentDateFunction";
import { GameHistoryObject } from "../types";
import { generateUniqueId } from "./generateUniqueId";

export function addDataToStorage(
  key: string,
  gameTime: string,
  gameResult: boolean,
  gamesHistory: GameHistoryObject[] | [],
  steps: number
): GameHistoryObject[] {
  const newGamesHistory = gamesHistory ? [...gamesHistory] : [];

  const newEntry = {
    id: generateUniqueId(),
    date: getCurrentDate(),
    gameTime: gameTime,
    gameResult: gameResult,
    steps: steps,
  };

  newGamesHistory.unshift(newEntry);

  if (newGamesHistory.length > 10) {
    newGamesHistory.pop();
  }

  localStorage.setItem(key, JSON.stringify(newGamesHistory));
  return newGamesHistory;
}
