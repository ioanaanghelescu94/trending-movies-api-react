import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import MainContext from "../../context/context";

import classes from "./movies.module.css";

const MoviesBoard = (props) => {
  const mainCtx = useContext(MainContext);
  const display = props.display;
  const movies = mainCtx.search
    ? filterList(props.state[display])
    : props.state[display];

  useEffect(() => {
    document.getElementById("movie-board").scrollTo(0, 0);
  }, [display]);

  function filterList(list) {
    return list.filter((el) => {
      const elValues = Object.values(el).some((val) => {
        if (typeof val === "string") {
          return val
            .trim()
            .toLowerCase()
            .includes(mainCtx.search.trim().toLowerCase());
        } else {
          return false;
        }
      });
      return elValues;
    });
  }
  console.log("MOVIE BOARD");
  return (
    <div
      id="movie-board"
      className={`${classes["movie-board"]} ${
        window.innerWidth > 992 && movies.length < 3
          ? classes["justify-left"]
          : ""
      }`}
    >
      {movies.length === 0 ? (
        <div className={classes["no-movies"]}>
          {props.state.error ? props.state.error.message : "No movies to show"}
        </div>
      ) : (
        movies.map((movie, index) => {
          let isFav =
            display === "favourites"
              ? true
              : props.state.favourites.some((fav) => {
                  // console.log(fav.id, movie['title'], fav.id === movie.id)
                  return fav.id === movie.id;
                });
          return (
            <Movie
              key={movie.id}
              index={index}
              data={movie}
              isFav={isFav}
              moviesLength={movies.length}
              onFavourite={props.onFavourite}
            />
          );
        })
      )}
    </div>
  );
};

export default React.memo(MoviesBoard);
