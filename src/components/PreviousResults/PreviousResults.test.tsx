import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PreviousResults } from "./PreviousResults";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PreviousResults component", () => {
  test("should display correct info when gamesgistory is empty", () => {
    const props = {
      gamesHistory: null,
    };
    render(
      <BrowserRouter>
        <PreviousResults {...props} />
      </BrowserRouter>
    );

    const info = screen.getByText("You do not have saved results yet");
    expect(info).toBeInTheDocument();
  });

  test("should display correct info when gamesgistory is no empty", () => {
    const props = {
      gamesHistory: [
        {
          id: "_36vdv6h",
          date: "Jan. 26. 2012, 14:34",
          gameResult: true,
          gameTime: "02:56",
          steps: 12,
        },
        {
          id: "_36dd6h",
          date: "Jan. 27. 2012, 10:34",
          gameResult: false,
          gameTime: "03:33",
          steps: 12,
        },
      ],
    };
    render(
      <BrowserRouter>
        <PreviousResults {...props} />
      </BrowserRouter>
    );

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);

    const thead1 = screen.getByRole("columnheader", { name: /date/i });
    const thead2 = screen.getByRole("columnheader", { name: /game time/i });
    const thead3 = screen.getByRole("columnheader", { name: /result/i });
    const thead4 = screen.getByRole("columnheader", { name: /steps/i });

    expect(thead1).toBeInTheDocument();
    expect(thead2).toBeInTheDocument();
    expect(thead3).toBeInTheDocument();
    expect(thead4).toBeInTheDocument();

    const row1 = rows[1];
    const row2 = rows[2];

    expect(within(row1).getByText("Jan. 26. 2012, 14:34")).toBeInTheDocument();
    expect(within(row1).getByText("Won")).toBeInTheDocument();
    expect(within(row1).getByText("02:56")).toBeInTheDocument();
    expect(within(row1).getByText("12")).toBeInTheDocument();

    expect(within(row2).getByText("Jan. 27. 2012, 10:34")).toBeInTheDocument();
    expect(within(row2).getByText("Lost")).toBeInTheDocument();
    expect(within(row2).getByText("03:33")).toBeInTheDocument();
    expect(within(row2).getByText("12")).toBeInTheDocument();
  });
});
