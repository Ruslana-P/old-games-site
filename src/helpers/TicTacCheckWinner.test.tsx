import { checkWinner } from "./TicTacCheckWinner";
import { winnerLine } from "./constants";

test("should return correct value", () => {
  const res1 = checkWinner(
    [
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" },
      { id: 6, value: "" },
      { id: 7, value: "" },
      { id: 8, value: "" },
      { id: 9, value: "" },
    ],
    winnerLine
  );

  const res2 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "0" },
      { id: 3, value: "X" },
      { id: 4, value: "0" },
      { id: 5, value: "x" },
      { id: 6, value: "0" },
      { id: 7, value: "0" },
      { id: 8, value: "x" },
      { id: 9, value: "0" },
    ],
    winnerLine
  );

  const res3 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "X" },
      { id: 3, value: "X" },
      { id: 4, value: "0" },
      { id: 5, value: "0" },
      { id: 6, value: "" },
      { id: 7, value: "0" },
      { id: 8, value: "" },
      { id: 9, value: "" },
    ],
    winnerLine
  );

  const res4 = checkWinner(
    [
      { id: 1, value: "0" },
      { id: 2, value: "" },
      { id: 3, value: "0" },
      { id: 4, value: "X" },
      { id: 5, value: "X" },
      { id: 6, value: "X" },
      { id: 7, value: "0" },
      { id: 8, value: "0" },
      { id: 9, value: "" },
    ],
    winnerLine
  );

  const res5 = checkWinner(
    [
      { id: 1, value: "0" },
      { id: 2, value: "" },
      { id: 3, value: "0" },
      { id: 4, value: "0" },
      { id: 5, value: "0" },
      { id: 6, value: "" },
      { id: 7, value: "X" },
      { id: 8, value: "X" },
      { id: 9, value: "X" },
    ],
    winnerLine
  );

  const res6 = checkWinner(
    [
      { id: 1, value: "0" },
      { id: 2, value: "" },
      { id: 3, value: "X" },
      { id: 4, value: "0" },
      { id: 5, value: "X" },
      { id: 6, value: "" },
      { id: 7, value: "0" },
      { id: 8, value: "" },
      { id: 9, value: "X" },
    ],
    winnerLine
  );

  const res7 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "0" },
      { id: 3, value: "0" },
      { id: 4, value: "0" },
      { id: 5, value: "0" },
      { id: 6, value: "X" },
      { id: 7, value: "X" },
      { id: 8, value: "0" },
      { id: 9, value: "X" },
    ],
    winnerLine
  );

  const res8 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "0" },
      { id: 3, value: "0" },
      { id: 4, value: "0" },
      { id: 5, value: "X" },
      { id: 6, value: "0" },
      { id: 7, value: "X" },
      { id: 8, value: "X" },
      { id: 9, value: "0" },
    ],
    winnerLine
  );

  const res9 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "X" },
      { id: 3, value: "0" },
      { id: 4, value: "0" },
      { id: 5, value: "X" },
      { id: 6, value: "0" },
      { id: 7, value: "0" },
      { id: 8, value: "" },
      { id: 9, value: "X" },
    ],
    winnerLine
  );

  const res10 = checkWinner(
    [
      { id: 1, value: "X" },
      { id: 2, value: "0" },
      { id: 3, value: "X" },
      { id: 4, value: "0" },
      { id: 5, value: "X" },
      { id: 6, value: "0" },
      { id: 7, value: "X" },
      { id: 8, value: "" },
      { id: 9, value: "X" },
    ],
    winnerLine
  );

  expect(res1).toBe(false);
  expect(res2).toBe(false);
  expect(res3).toBe("X");
  expect(res4).toBe("X");
  expect(res5).toBe("X");
  expect(res6).toBe("0");
  expect(res7).toBe("0");
  expect(res8).toBe("0");
  expect(res9).toBe("X");
  expect(res10).toBe("X");
});
