import React, { useEffect, useState, useContext, useCallback } from "react";
import MoviesBoard from "./components/movies/MoviesBoard";
import axios from "axios";

import "./App.css";
import background from "./assets/background-gradient.png";
import Header from "./components/layout/Header";
import MainContext from "./context/context";
import Loader from "./components/UI/Loader/Loader";

const INITIAL_STATE = {
  movies: [],
  favourites: [],
  error: null
};

function App() {
  const [moviesState, setMovies] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState("movies");
  const mainCtx = useContext(MainContext);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d48cdd77b4823f0a7986fda281b90520"
      )
      .then((response) => {
        setMovies((prevState) => {
          return {
            ...prevState,
            movies: response.data.results,
          };
        });

        setIsLoading(false);
      })
      .catch((err) => {
        setMovies((prevState) => {
          return {
            ...prevState,
            error: err
          }
        })
        setIsLoading(false);
      });

  }, []);

  const handlerAddFavourite = useCallback(({ target }) => {
    let id = +target.getAttribute("dt-id"),
      fav = Boolean(target.getAttribute("dt-fav"));
    console.log('function add fav')
    setMovies((prevState) => {
      let newState = { ...prevState };

      if (fav) {
        //if it was on 'favs' and it was clicked then it becomes 'unfav'
        let favIndex = newState.favourites.findIndex((fav) => fav.id === id);
        newState.favourites.splice(favIndex, 1);
        console.log(favIndex);
      } else {
        //if it has not already on favourites, then add i
        const newFav = newState.movies.find(movie => movie.id === id);
        newState.favourites.push(newFav);
        console.log(newFav)
      }
      // console.log('new state --->', newState)
      return newState;
    });
  }, []);

  console.log(moviesState.movies, moviesState.favourites)

  const handlerMenuItem = ({ target }) => {
    let category = target.getAttribute("dt-category");

    setDisplay(category);
    
    mainCtx.updateSearch('');
    mainCtx.toggleSearch(true);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
      }}
    >
      <Header onClick={handlerMenuItem} category={display}/>
      <div id="portal-search--smal" style={{ padding: "0 1rem" }}></div>
      {!isLoading ? (
        <MoviesBoard
          display={display}
          state={moviesState}
          onFavourite={handlerAddFavourite}
        />
      ) : <Loader />}
    </div>
  );
}

export default App;
