import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("should render correct info", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /get nostalgic/i });
    expect(heading).toBeInTheDocument();

    const subHeading = screen.getByRole("heading", {
      name: /feel like it's the '90s again/i,
    });
    expect(subHeading).toBeInTheDocument();

    const cardTitle1 = screen.getByRole("heading", { name: "The Gem Puzzle" });
    const cardTitle2 = screen.getByRole("heading", { name: "Memory" });
    const cardTitle3 = screen.getByRole("heading", { name: "Tic-Tac-Toe" });
    expect(cardTitle1).toBeInTheDocument();
    expect(cardTitle2).toBeInTheDocument();
    expect(cardTitle3).toBeInTheDocument();

    const links = screen.getAllByText("Play");
    expect(links).toHaveLength(3);

    const allLinks = screen.getAllByRole("link");
    expect(allLinks).toHaveLength(4);

    const copyright = screen.getByTestId("copyright");
    expect(copyright).toBeInTheDocument();
  });

  test("link to puzzlegame should work", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");

    fireEvent.click(links[0]);
    expect(window.location.href).toEqual(
      expect.stringContaining("/puzzlegame")
    );
  });

  test("link to memory game should work", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");

    fireEvent.click(links[1]);
    expect(window.location.href).toEqual(
      expect.stringContaining("/memorygame")
    );
  });

  test("link to tictactocgame should work", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const links = screen.getAllByRole("link");

    fireEvent.click(links[2]);
    expect(window.location.href).toEqual(
      expect.stringContaining("/tictactoegame")
    );
  });

  test("link to copyright page should work", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");

    fireEvent.click(links[3]);
    expect(window.location.href).toEqual(
      expect.stringContaining("/copyrightpage")
    );
  });
});
