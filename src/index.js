import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PuzzleGame } from "./components/PuzzleGame/PuzzleGame";
import { TicTacToeGame } from "./components/TicTacToeGame/TicTacToeGame";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
import { CopyrightPage } from "./components/Copyright/CopyrightPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/puzzlegame" element={<PuzzleGame />} />
        <Route path="/memorygame" element={<MemoryGame />} />
        <Route path="/tictactoegame" element={<TicTacToeGame />} />
        <Route path="/copyrightpage" element={<CopyrightPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
