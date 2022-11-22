import React from "react";

import classes from "./loader.module.css";
import loader from "../../../assets/loader_1.png";

const Loader = React.forwardRef((props, ref) => {
  return (
    <div className={classes["loader-wrapper"]}>
      <img className={classes["loader"]} src={loader} alt='loader' />
    </div>
  );
});

export default Loader;
