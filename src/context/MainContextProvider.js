import React, { useState } from "react";
import MainContext from "./context";

const MainContextProvider = (props) => {
  const [searchState, setSearch] = useState({
    search: '',
    displaySearch: false
  });
  const mainCtx = {
    search: searchState.search,
    displaySearch: searchState.displaySearch,
    updateSearch: (value) => {
      setSearch((prev) => {
        return {
          ...prev,
          search: value,
        }
      });
    },
    toggleSearch: (close) => {
      console.log('toggle search')
      setSearch((prev) => {
        return {
          search: '',
          displaySearch: close ? false : !prev.displaySearch
        }
      });
    },
  };

  return (
    <MainContext.Provider value={mainCtx}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
