import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CopyrightContent } from "./CopyrightContent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CopyrightContent component", () => {
  test("should display correct info", () => {
    render(
      <BrowserRouter>
        <CopyrightContent />
      </BrowserRouter>
    );

    const text1 = screen.getByText(/along with links/i);
    const text2 = screen.getByText(/creative work, which/i);
    const text3 = screen.getByText(/does not violate copyright./i);
    const text4 = screen.getByText(/list below have been created by AI./i);

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: "View images with source" });
    expect(btn).toBeInTheDocument();
  });

  test("click on buttton shoould cause pictures renderingt", async () => {
    render(
      <BrowserRouter>
        <CopyrightContent />
      </BrowserRouter>
    );
    expect(() => screen.getAllByRole("img")).toThrow();

    const btn = screen.getByRole("button", { name: "View images with source" });
    fireEvent.click(btn);

    const images = await screen.findAllByRole("img");
    expect(images).toHaveLength(18);
  });
});
