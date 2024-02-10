import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameCard } from "./GameCard";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const props = {
  title: "MemoryGame",
  src: "imageSrc",
  descr: "Memory game description",
  to: "path_to_game_page",
};

describe("GameCard component", () => {
  test("component should display correct info", () => {
    render(
      <BrowserRouter>
        <GameCard {...props} />
      </BrowserRouter>
    );

    const title = screen.getByRole("heading", { name: props.title });
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText("Game avatar");
    expect(image).toBeInTheDocument();

    const descr = screen.getByText(props.descr);
    expect(descr).toBeInTheDocument();

    const button = screen.getByRole("link", { name: "Play" });
    expect(button).toBeInTheDocument();
  });

  test("button should redirect to game page", () => {
    const { container } = render(
      <MemoryRouter>
        <GameCard {...props} />
      </MemoryRouter>
    );

    const button = screen.getByRole("link", { name: "Play" });
    fireEvent.click(button);

    expect(container.innerHTML).toMatch("/path_to_game_page");
  });
});
