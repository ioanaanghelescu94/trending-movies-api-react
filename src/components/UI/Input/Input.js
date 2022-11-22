import React from "react";

import classes from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes["input-wrapper"]}>
      <input
        id={props.id}
        className={`${classes["normal-input"]} ${props.searchClasses['search-input']}`}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
        onChange={props.onChange}
        autoFocus
      />
    </div>
  );
});

export default Input;
