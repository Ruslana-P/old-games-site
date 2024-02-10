import React from "react";
import { AutorsRight } from "../../images/autorsRight";
import classes from "./CopyrightBtn.module.scss";
import { Link } from "react-router-dom";

export const CopyrightBtn: React.FC = () => {
  return (
    <div data-testid="copyright" className={classes.cnt}>
      <Link className={classes.subCnt} to="/copyrightpage">
        <AutorsRight />
      </Link>
    </div>
  );
};
