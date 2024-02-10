import { ticTacTocFieldObject } from "../types";

export function pickRandomElement(arr: ticTacTocFieldObject[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
