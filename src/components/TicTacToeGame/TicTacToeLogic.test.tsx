import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TicTacToeGame } from "./TicTacToeGame";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PuzzlesLogic component", () => {
  test("component should display correct info", async () => {
    render(
      <BrowserRouter>
        <TicTacToeGame />
      </BrowserRouter>
    );

    const gameField = screen.getByTestId("ticTacField");
    expect(gameField).toBeInTheDocument();

    const stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toBeInTheDocument();

    const prevResults = screen.getByTestId("prevResult");
    expect(prevResults).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: "Start" });
    fireEvent.click(btn);

    const ticTacElems = await within(gameField).findAllByTestId("ticTacElem");
    expect(ticTacElems).toHaveLength(9);
  });
});
