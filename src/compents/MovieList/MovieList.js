import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./../MovieCard/MovieCard";
const MovieList = () => {
  const [text, setText] = useState("");
  const movies = useSelector((state) => state.movieReducer.movies);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="col-md-5 my-3 mx-5"
        value={text}
      />
      <div className="d-flex justify-content-arround">
        {movies
          .filter((el) =>
            el.title.toUpperCase().includes(text.toUpperCase().trim())
          )
          .map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
