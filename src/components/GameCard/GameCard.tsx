import React from "react";
import classes from "./GameCard.module.scss";
import { Link } from "react-router-dom";
import { GameCardProps } from "../../types";

export const GameCard: React.FC<GameCardProps> = ({
  title,
  src,
  descr,
  to,
}) => {
  return (
    <div className={classes.gameCard}>
      <h4 className={classes.cardTittle}>{title}</h4>
      <p className={classes.cardImage}>
        <img src={src} alt="Game avatar" />
      </p>
      <p className={classes.cardDescr}>{descr}</p>
      <Link to={to} className={classes.cardBtn}>
        Play
      </Link>
    </div>
  );
};
