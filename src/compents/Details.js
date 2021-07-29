import React from "react";
import { useSelector } from "react-redux";

const Details = ({ match }) => {
  const movies = useSelector((state) => state.movieReducer.movies);
  const movie = movies.find((elt) => elt.id.toString() === match.params.id);
  return <div>{movie.title}</div>;
};

export default Details;
