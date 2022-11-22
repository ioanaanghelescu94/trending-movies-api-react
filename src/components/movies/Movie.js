import React from "react";

import classes from "./movies.module.css";
import fullHeart from "../../assets/full-heart.png";
import emptyHeart from "../../assets/empty-heart.png";

const Movie = (props) => {
  const movie = props.data;
  let releaseDate = new Date(movie["release_date"]);
  releaseDate = releaseDate.toLocaleDateString("en-GB");
  console.log(window.innerWidth > 992 && props.moviesLength < 3)
  return (
    <div
      className={`${classes["movie-wrapper"]} ${
        window.innerWidth > 992 && props.moviesLength < 3
          ? classes["margin-right"]
          : ""
      }`}
    >
      <div
        className={classes["movie-thumbnail"]}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${movie["poster_path"]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={classes["heart-wrapper"]}>
          <img
            src={props.isFav ? fullHeart : emptyHeart}
            dt-id={movie.id}
            dt-fav={props.isFav ? "true" : ""}
            dt-index={props.index}
            onClick={props.onFavourite}
            alt="heart"
          />
        </div>
      </div>
      <h3 className={classes["movie-title"]}>
        {" "}
        {movie.title ? movie.title : "(Missing title)"}
      </h3>
      <p className={classes["movie-release-date"]}>
        Release date: {releaseDate ? releaseDate : "(Mising date)"}
      </p>
    </div>
  );
};

export default Movie;
