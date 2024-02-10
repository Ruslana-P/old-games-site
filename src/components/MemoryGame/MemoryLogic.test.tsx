import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MemoryLogic } from "./MemoryLogic";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MemoryLogic component", () => {
  test("component should display correct info", async () => {
    render(
      <BrowserRouter>
        <MemoryLogic />
      </BrowserRouter>
    );

    const gameField = screen.getByTestId("cardsField");
    expect(gameField).toBeInTheDocument();

    const stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toBeInTheDocument();

    const prevResults = screen.getByTestId("prevResult");
    expect(prevResults).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: "Start" });
    fireEvent.click(btn);

    const cardCnts = await within(gameField).findAllByTestId("cardCnt");
    expect(cardCnts).toHaveLength(12);

    const unflippedImages = within(gameField).getAllByAltText("unflipped card");
    const flippesImages = within(gameField).getAllByAltText("game card");
    expect(unflippedImages).toHaveLength(12);
    expect(flippesImages).toHaveLength(12);
  });
});
