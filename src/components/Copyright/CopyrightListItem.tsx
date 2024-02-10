import React from "react";
import classes from "./CopyrightContent.module.scss";
import { CopyrightListItemProps } from "../../types";

export const CopyrightListItem: React.FC<CopyrightListItemProps> = ({
  src,
  img,
}) => {
  return (
    <li className={classes.listItem}>
      <img src={img} alt="game card" />
      <a
        className={classes.btn}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source here
      </a>
    </li>
  );
};
