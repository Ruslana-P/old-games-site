import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PuzzlesLogic } from "./PuzzlesLogic";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PuzzlesLogic component", () => {
  test("component should display correct info", async () => {
    render(
      <BrowserRouter>
        <PuzzlesLogic />
      </BrowserRouter>
    );

    const gameField = screen.getByTestId("puzzlesField");
    expect(gameField).toBeInTheDocument();

    const stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toBeInTheDocument();

    const prevResults = screen.getByTestId("prevResult");
    expect(prevResults).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: "Start" });
    fireEvent.click(btn);

    const itemCnts = await within(gameField).findAllByTestId("itemCnt");
    expect(itemCnts).toHaveLength(16);
  });
});
