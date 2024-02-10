import React from "react";
import { ModalGameEnded } from "./ModalGameEnded";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ModalGameEnded component", () => {
  test("should display correct info when user wins", () => {
    const props = {
      time: "00:10",
      steps: 9,
      result: true,
      onclick: () => {},
    };

    render(
      <BrowserRouter>
        <ModalGameEnded {...props} />
      </BrowserRouter>
    );

    const title1 = screen.getByText("Congratulation!");
    const title2 = screen.getByText("You won");

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    const time = screen.getByText(props.time);
    const steps = screen.getByText(props.steps);
    const img = screen.getByAltText("won game");
    expect(time).toBeInTheDocument();
    expect(steps).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test("should display correct info when user losts", () => {
    const props = {
      time: "00:12",
      steps: 12,
      result: false,
      onclick: () => {},
    };

    render(
      <BrowserRouter>
        <ModalGameEnded {...props} />
      </BrowserRouter>
    );

    const title1 = screen.getByText("We are sorry!");
    const title2 = screen.getByText("You lost");

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    const time = screen.getByText(props.time);
    const steps = screen.getByText(props.steps);
    const img = screen.getByAltText("lost game");
    expect(time).toBeInTheDocument();
    expect(steps).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test("close button should work correctly", () => {
    const mockOnClick = jest.fn();

    const props = {
      time: "00:10",
      steps: 9,
      result: true,
      onclick: mockOnClick,
    };

    render(
      <BrowserRouter>
        <ModalGameEnded {...props} />
      </BrowserRouter>
    );

    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
