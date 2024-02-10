export const adjacentMappings: { [key: number]: number[] } = {
  0: [1, 4],
  1: [0, 2, 5],
  2: [1, 3, 6],
  3: [2, 7],
  4: [0, 5, 8],
  5: [1, 4, 6, 9],
  6: [2, 5, 7, 10],
  7: [3, 6, 11],
  8: [4, 9, 12],
  9: [5, 8, 10, 13],
  10: [6, 9, 11, 14],
  11: [7, 10, 15],
  12: [8, 13],
  13: [9, 12, 14],
  14: [10, 13, 15],
  15: [11, 14],
};

export const arrayForCheck = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
];

export const autorsRightImgs = [
  {
    id: 0,
    src: "https://pl.pinterest.com/pin/844493673475216/",
  },
  {
    id: 1,
    src: "https://pl.pinterest.com/pin/492649952243775/",
  },
  {
    id: 2,
    src: "https://pl.pinterest.com/pin/563018696546167/",
  },
  {
    id: 3,
    src: "https://pl.pinterest.com/pin/10836855345212650/",
  },
  {
    id: 4,
    src: "https://pl.pinterest.com/pin/2462974788872491/",
  },
  {
    id: 5,
    src: "https://pl.pinterest.com/pin/1196337400851507/",
  },
  {
    id: 6,
    src: "https://pl.pinterest.com/pin/351912463282441/",
  },
  {
    id: 7,
    src: "https://pl.pinterest.com/pin/325033298120219643/",
  },
  {
    id: 8,
    src: "https://pl.pinterest.com/pin/1125968650315520/",
  },
  {
    id: 9,
    src: "https://pl.pinterest.com/pin/68746361263/",
  },
  {
    id: 10,
    src: "https://pl.pinterest.com/pin/1548181160098733/",
  },
  {
    id: 11,
    src: "https://pl.pinterest.com/pin/15129348739718983/",
  },
  {
    id: 12,
    src: "https://pl.pinterest.com/pin/1407443618739270/",
  },
  {
    id: 13,
    src: "https://pl.pinterest.com/pin/689824867927752151/",
  },
  {
    id: 14,
    src: "https://pl.pinterest.com/pin/70437480767945/",
  },
  {
    id: 15,
    src: "https://pl.pinterest.com/pin/657173770641977574/",
  },
  {
    id: 16,
    src: "https://pl.pinterest.com/pin/657173770641977574/",
  },
  {
    id: 17,
    src: "https://pl.pinterest.com/pin/1015069203494108234/",
  },
];

export const gameCardInfo = [
  {
    cardName: "The Gem Puzzle",
    cardDescr: "Slide numbered tiles in a grid to arrange them in order.",
    cardLink: "/puzzlegame",
  },
  {
    cardName: "Memory",
    cardDescr: "Match pairs of hidden cards to test your recall.",
    cardLink: "/memorygame",
  },
  {
    cardName: "Tic-Tac-Toe",
    cardDescr: "Form a winning row, column, or diagonal.",
    cardLink: "/tictactoegame",
  },
];

export const puzzleNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

export const TicTacTocInnitialState = [
  { id: 0, value: "" },
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
];

export const winnerLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
