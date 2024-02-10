import { ticTacTocFieldObject } from "../types";

export const checkWinner = (
  gameArray: ticTacTocFieldObject[],
  winnerLine: number[][]
) => {
  for (let i = 0; i < winnerLine.length; i++) {
    const [a, b, c] = winnerLine[i];

    if (
      gameArray[a].value &&
      gameArray[a].value === gameArray[b].value &&
      gameArray[a].value === gameArray[c].value
    ) {
      return gameArray[a].value;
    }
  }
  return false;
};
