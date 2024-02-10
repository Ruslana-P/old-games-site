import React from "react";
import classes from "./FieldElem.module.scss";
import { FieldElemProps } from "../../types";

export const FieldElem: React.FC<FieldElemProps> = React.memo(
  ({ clickHandler, elem }) => {
    return (
      <div
        data-testid="ticTacElem"
        onClick={() => clickHandler(elem)}
        className={`${classes.elem} ${
          elem.value === "X" ? classes.cross : ""
        } ${elem.value === "0" ? classes.zero : ""}`}
      ></div>
    );
  }
);
