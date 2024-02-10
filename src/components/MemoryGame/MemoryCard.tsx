import React from "react";
import classes from "./MemoryCard.module.scss";
import { MemoryCardProps } from "../../types";
const unflippedCard = require("../../images/memory-card.png");

export const MemoryCard: React.FC<MemoryCardProps> = React.memo(
  ({ src, flipped, matched, onClick, id }) => {
    return (
      <div
        data-testid="cardCnt"
        className={`${classes.cardCnt} ${flipped ? classes.flipped : ""} ${
          matched ? classes.matched : ""
        }`}
        onClick={() => {
          if (!matched && !flipped) {
            onClick(id);
          }
        }}
      >
        <div className={classes.cardInner}>
          <div className={classes.frontFace}>
            <img src={unflippedCard} alt="unflipped card" />
          </div>
          <div className={classes.backFace}>
            <img src={src} alt="game card" />
          </div>
        </div>
      </div>
    );
  }
);
