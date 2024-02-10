import { getDataFromStorage } from "./getDataFromStorage";

const localStorageMock = (function () {
  const store: { [key: string]: string | null } = {
    puzzleGame:
      '[{"id":"_zle8zgxwp","date":"Jan. 25, 2024, 11:32","gameTime":"00:01","gameResult":false,"steps":0},{"id":"_hiimx6bak","date":"Jan. 25, 2024, 11:32","gameTime":"00:01","gameResult":false,"steps":0}]',
    memoryGame:
      '[{"id":"_zle8zgxwp","date":"Jan. 28, 2024, 11:32","gameTime":"00:01","gameResult":false,"steps":0}]',
  };
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
  };
})();

test("should return correct data", () => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });

  const res1 = getDataFromStorage("puzzleGame");
  const res2 = getDataFromStorage("memoryGame");
  const res3 = getDataFromStorage("ticTacTocGame");

  expect(res1).toStrictEqual([
    {
      id: "_zle8zgxwp",
      date: "Jan. 25, 2024, 11:32",
      gameTime: "00:01",
      gameResult: false,
      steps: 0,
    },
    {
      id: "_hiimx6bak",
      date: "Jan. 25, 2024, 11:32",
      gameTime: "00:01",
      gameResult: false,
      steps: 0,
    },
  ]);

  expect(res2).toStrictEqual([
    {
      id: "_zle8zgxwp",
      date: "Jan. 28, 2024, 11:32",
      gameTime: "00:01",
      gameResult: false,
      steps: 0,
    },
  ]);

  expect(res3).toBeNull();
});
