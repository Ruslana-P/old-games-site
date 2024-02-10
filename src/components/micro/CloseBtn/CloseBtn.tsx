import React from "react";
import classes from "../CloseBtn/CloseBtn.module.scss";
import { CloseBtnProps } from "../../../types";

export const CloseBtn: React.FC<CloseBtnProps> = ({ callback }) => {
  return (
    <button
      onClick={() => {
        callback();
      }}
      className={classes.closeBtn}
    >
      <span></span>
      <span></span>
    </button>
  );
};
