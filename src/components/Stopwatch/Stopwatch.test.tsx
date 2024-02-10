import React from "react";
import { Stopwatch } from "./Stopwatch";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Stopwatch component", () => {
  const startGameMock = jest.fn();
  const stopGameMock = jest.fn();
  const pauseGameMock = jest.fn();
  const resumeGameMock = jest.fn();
  const resetGameMock = jest.fn();

  const props = {
    passTime: () => {},
    gameEnd: false,
    stopGame: stopGameMock,
    onResetTimer: () => {},
    startGame: startGameMock,
    pauseGame: pauseGameMock,
    resumeGame: resumeGameMock,
    resetGame: resetGameMock,
  };

  test("should render correctly", async () => {
    render(
      <BrowserRouter>
        <Stopwatch {...props} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("stopwatch")).toBeInTheDocument();

    const btnStart = screen.getByRole("button", { name: "Start" });
    const btnReset = screen.getByRole("button", { name: "Reset" });
    expect(btnStart).toBeInTheDocument();
    expect(btnReset).toBeInTheDocument();
    expect(() => screen.getByRole("button", { name: "Resume" })).toThrow();
    expect(() => screen.getByRole("button", { name: "Pause" })).toThrow();
    expect(() => screen.getByRole("button", { name: "Stop" })).toThrow();

    fireEvent.click(btnStart);
    const btnPause = await screen.findByRole("button", { name: "Pause" });
    expect(btnPause).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Stop" })).toBeInTheDocument();
    expect(() => screen.getByRole("button", { name: "Start" })).toThrow();

    fireEvent.click(btnPause);
    const btnResume = await screen.findByRole("button", { name: "Resume" });
    expect(btnResume).toBeInTheDocument();
    expect(() => screen.getByRole("button", { name: "Pause" })).toThrow();
  });

  test("buttons should work correctly", async () => {
    render(
      <BrowserRouter>
        <Stopwatch {...props} />
      </BrowserRouter>
    );

    const btnStart = screen.getByRole("button", { name: "Start" });
    fireEvent.click(btnStart);
    expect(startGameMock).toHaveBeenCalled();

    const btnPause = await screen.findByRole("button", { name: "Pause" });
    fireEvent.click(btnPause);
    expect(pauseGameMock).toHaveBeenCalled();

    const btnResume = await screen.findByRole("button", { name: "Resume" });
    fireEvent.click(btnResume);
    expect(resumeGameMock).toHaveBeenCalled();

    const btnStop = screen.getByRole("button", { name: "Stop" });
    fireEvent.click(btnStop);
    expect(stopGameMock).toHaveBeenCalled();

    const btnReset = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(btnReset);
    expect(resetGameMock).toHaveBeenCalled();
  });
});
