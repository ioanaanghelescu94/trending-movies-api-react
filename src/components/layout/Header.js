import React from "react";
import MenuButton from "../UI/Button/MenuButton";
import SearchInput from "../UI/Input/SearchInput";

import classes from "./header.module.css";

const Header = (props) => {
  const titles = {
    movies: 'Trending Movies',
    favourites: 'Your Favs'
  }
  return (
    <div className={classes["header"]}>
      <MenuButton onClick={props.onClick} />
      <div className={classes["header-title-container"]}>
        <h2 className={classes["header-title"]}>{titles[props.category]}</h2>
      </div>
      <div id="portal-search--large" className={classes["portal-search--large"]}></div>
      <SearchInput />
    </div>
  );
};

export default Header;
