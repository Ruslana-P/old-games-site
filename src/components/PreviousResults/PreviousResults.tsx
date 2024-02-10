import React from "react";
import classes from "./PreviousResults.module.scss";
import classesG from "../../scss/common.module.scss";
import { PreviousResultsProps } from "../../types";
import { TableRow } from "./TableRow";

export const PreviousResults: React.FC<PreviousResultsProps> = React.memo(
  ({ gamesHistory }) => {
    return (
      <div
        data-testid="prevResult"
        className={`${classes.cnt} ${classesG.additBlocksG} }`}
      >
        <h2 className={`${classes.title} ${classesG.titleG}`}>
          Previous results
        </h2>

        {gamesHistory ? (
          <table className={classes.table}>
            <thead>
              <tr className={classes.thead}>
                <th>Date</th>
                <th>Game time</th>
                <th> Result</th>
                <th>Steps</th>
              </tr>
            </thead>
            <tbody>
              {gamesHistory.map((item) => {
                return (
                  <TableRow
                    key={item.id}
                    date={item.date}
                    gameTime={item.gameTime}
                    gameResult={item.gameResult}
                    steps={item.steps}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>You do not have saved results yet</p>
        )}
      </div>
    );
  }
);
