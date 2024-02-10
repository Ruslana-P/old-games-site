import { shuffleArray } from "./shuffleArrayFunction";
import { countInversions } from "./countInversionsFunction";
import { PuzzleItem } from "../types";

export const getFinalArray = (array: number[]): PuzzleItem[] => {
  const shuffledNumbers = shuffleArray([...array]);
  const interactions = countInversions(shuffledNumbers);
  if (interactions % 2 === 0) {
    shuffledNumbers.push(0);
    return shuffledNumbers.map((item: number, index: number) => {
      if (index === 15 || index === 14 || index === 11) {
        return { id: item, value: item, sortable: true };
      } else {
        return { id: item, value: item, sortable: false };
      }
    });
  } else {
    return getFinalArray(array);
  }
};
