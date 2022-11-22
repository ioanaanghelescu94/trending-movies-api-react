import React, { useState, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import MainContext from "../../../context/context";

import classes from "./searchInput.module.css";
import searchIcon from "../../../assets/search-icon.png";

const SearchInput = (props) => {
  const [timer, setTimer] = useState(null)
  const mainCtx = useContext(MainContext);
  const searchRef = useRef();
  
  const isLargeRes = window.innerWidth > 992;
  const portalDOM = isLargeRes ? 'portal-search--large' : 'portal-search--smal';
  const portal = document.getElementById(portalDOM);

  console.log('large', isLargeRes, portal)

  const handlerShowSearch = () => {
    mainCtx.toggleSearch()
  };

  const handlerUpdateInput = ({ target }) => {
    const searchValue = target.value;

    clearTimeout(timer);

    const searchTimeout = setTimeout(() => {
      mainCtx.updateSearch(searchValue);
    }, 1000);

    setTimer(searchTimeout)
  };

  return (
    <div className={classes["search-wrapper"]}>
      <div className={classes["search-icon"]}>
        <img src={searchIcon} alt="search-icon" onClick={handlerShowSearch}/>
        {mainCtx.displaySearch &&
          ReactDOM.createPortal(
            <Input
              id="search-input"
              type="text"
              placeholder="Type in movie title..."
              searchClasses={classes}
              ref={searchRef}
              onChange={handlerUpdateInput}
            />,
            portal
          )}
      </div>
    </div>
  );
};

export default SearchInput;
