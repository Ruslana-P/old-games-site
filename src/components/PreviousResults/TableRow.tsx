import React from "react";
import classes from "./PreviousResults.module.scss";
import { TableRowProps } from "../../types";

export const TableRow: React.FC<TableRowProps> = ({
  date,
  gameTime,
  gameResult,
  steps,
}) => {
  return (
    <tr className={classes.tBody}>
      <td className={classes.tdDate}>
        <span>{date}</span>
      </td>
      <td>{gameTime}</td>
      <td> {gameResult ? "Won" : "Lost"}</td>
      <td>{steps}</td>
    </tr>
  );
};
