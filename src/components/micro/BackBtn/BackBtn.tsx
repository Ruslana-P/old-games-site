import React from "react";
import classes from "./BackBtn.module.css";
import { Link } from "react-router-dom";
import { ArrowBack } from "./ArrowBack";

export const BackBtn: React.FC = () => {
  return (
    <Link to="/" className={classes.closeBtn}>
      <ArrowBack />
    </Link>
  );
};
