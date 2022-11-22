import React, { useState } from "react";

import classes from "./menuButton.module.css";

const MenuButton = (props) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handlerDisplayDr = () => {
    setDisplayDropdown(prev => !prev);
  }

  return (
    <div className={classes["menu"]}>
      <div className={classes["menu-button"]} onClick={handlerDisplayDr}>
        <div className={`${classes["bar1"]} ${displayDropdown ? classes['change1'] : '' }`}></div>
        <div className={`${classes["bar2"]} ${displayDropdown ? classes['change2'] : '' }`}></div>
        <div className={`${classes["bar1"]} ${displayDropdown ? classes['change3'] : '' }`}></div>
      </div>
      {displayDropdown && (
        <ul className={classes["menu-dropdown"]} onClick={handlerDisplayDr}>
          <li
            className={classes["menu-dropdown-item"]}
            dt-category="movies"
            onClick={props.onClick}
          >
            Movies
          </li>
          <li
            className={classes["menu-dropdown-item"]}
            dt-category="favourites"
            onClick={props.onClick}
          >
            Favourites
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuButton;
