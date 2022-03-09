import React from "react";
import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <h5 className={classes.logo}>PhishCode.</h5>;
    </div>
  );
};

export default Topbar;
