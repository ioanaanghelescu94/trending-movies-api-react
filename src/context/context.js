import React from "react";

const MainContext = React.createContext({
    search: '',
    displaySearch: false,
    updateSearch: (value) => {},
    toggleSearch: () => {},
})

export default MainContext;