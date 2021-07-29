import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/Action/Action";
import EditMovie from "../EditMovie/EditMovie";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "20rem", marginLeft: "80px" }}>
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          style={{ height: "320px" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.rate}</Card.Text>
          <Button
            variant="primary"
            onClick={() => dispatch(deleteMovie(movie.id))}
          >
            Delete
          </Button>
          <EditMovie movie={movie} />
          <Link to={`/${movie.id}`}>
            <Button>See details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
