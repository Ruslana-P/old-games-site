import React from "react";
import { CloseBtn } from "../micro/CloseBtn/CloseBtn";
import classes from "./ModalGameEnded.module.scss";
import { ModalGameEndedProps } from "../../types";
const lostGame = require("../../images/lostImg.png");
const wonGame = require("../../images/wonGame.png");

export const ModalGameEnded: React.FC<ModalGameEndedProps> = ({
  time,
  steps,
  result,
  onclick,
}) => {
  return (
    <div className={classes.cnt}>
      <div className={classes.modal}>
        <CloseBtn callback={onclick} />
        {result ? (
          <>
            <p className={classes.titleText}> Congratulation!</p>
            <p className={classes.titleText}>You won</p>
          </>
        ) : (
          <>
            <p className={classes.titleText}>We are sorry!</p>
            <p className={classes.titleText}>You lost</p>
          </>
        )}
        <div className={classes.resultsCnt}>
          <p className={classes.regText}>Your results:</p>
          <p className={classes.regText}>
            <span>Time:</span> {time}
          </p>
          {steps !== undefined && (
            <p className={classes.regText}>
              <span>Steps:</span> {steps}
            </p>
          )}
        </div>
        {result ? (
          <div className={classes.imgCnt}>
            <img className={classes.img} src={wonGame} alt="won game" />
          </div>
        ) : (
          <div className={classes.imgCnt}>
            <img className={classes.img} src={lostGame} alt="lost game" />
          </div>
        )}
      </div>
    </div>
  );
};
