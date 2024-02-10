export type checkMatchArgs = (
  flippedCards: string[],
  cards: MemoryCardObject[]
) => void;

export type CloseBtnProps = {
  callback: () => void;
};

export type CopyrightListItemProps = {
  src: string;
  img: string;
};

export type EndGameState = {
  end: boolean;
  result?: boolean;
};
export type FieldElemProps = {
  clickHandler: (arg0: ticTacTocFieldObject) => void;
  elem: ticTacTocFieldObject;
};
export type GameCardProps = {
  title: string;
  src: string;
  descr: string;
  to: string;
};

export type GameHistoryObject = {
  id: string;
  date: string;
  gameResult: boolean;
  gameTime: string;
  steps: number;
};

export type GameContainerProps = {
  children: React.ReactNode;
};

export type MemoryCardObject = {
  src: string;
  flipped: boolean;
  matched: boolean;

  id: string;
};

export type MemoryCardProps = MemoryCardObject & {
  onClick: (id: string) => void;
};

export type ModalGameEndedProps = {
  time: string;
  steps: number;
  result: boolean;
  onclick: () => void;
};
export type PreviousResultsProps = {
  gamesHistory: GameHistoryObject[] | null;
};

export type PuzzleItem = {
  id: number;
  value: number;
  sortable: boolean;
};

export type TableRowProps = {
  date: string;
  gameTime: string;
  gameResult: boolean;
  steps: number;
};

export type SortableItemProps = {
  id: number;
  sortable: Boolean;
};

export type StartGameProps = {
  paused: Boolean;
  started: Boolean;
};

export type StopwatchProps = {
  passTime: (time: string) => void;
  gameEnd: Boolean;
  stopGame: () => void;
  onResetTimer: (reset: () => void) => void;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  resetGame: () => void;
};
export type StopwatchBtnsProps = {
  isActive: boolean;
  handleStart: () => void;
  handleStop: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
  isPaused: boolean;
};

export type ticTacTocFieldObject = {
  id: number;
  value: string;
};
