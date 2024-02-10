import { addDataToStorage } from "./addDataToStorage";
import { GameHistoryObject } from "../types";

jest.mock("./getCurrentDateFunction", () => ({
  getCurrentDate: () => "Jan. 23, 2024, 12:47",
}));

jest.mock("./generateUniqueId", () => ({
  generateUniqueId: () => "_unicId",
}));

const localStorageMock = (function () {
  const store: { [key: string]: string | null } = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
  };
})();

test("should add a new game entry at the start of the history", () => {
  const gamesHistory: GameHistoryObject[] = [
    {
      id: "unicid1",
      date: "Jan. 23, 2024, 12:47",
      gameTime: "00:22",
      gameResult: true,
      steps: 10,
    },
  ];
  const newGame = { gameTime: "04:10", gameResult: false, steps: 8 };

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });

  addDataToStorage(
    "gameKey",
    newGame.gameTime,
    newGame.gameResult,
    gamesHistory,
    newGame.steps
  );

  const expectedResult = [
    {
      id: "_unicId",
      date: "Jan. 23, 2024, 12:47",
      gameTime: "04:10",
      gameResult: false,
      steps: 8,
    },
    {
      id: "unicid1",
      date: "Jan. 23, 2024, 12:47",
      gameTime: "00:22",
      gameResult: true,
      steps: 10,
    },
  ];

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "gameKey",
    JSON.stringify(expectedResult)
  );
});
