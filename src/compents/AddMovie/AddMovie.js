import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/Action/Action";
const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [poster, setPoster] = useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    if (title && description && rate && poster) {
      dispatch(
        addMovie({
          id: Math.random(),
          title,
          description,
          rate,
          posterUrl: poster,
        })
      );
    } else {
      alert("all fields should be not empty");
    }
  };
  return (
    <div>
      <form onSubmit={add}>
        Title:
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
        />
        Description:
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-control"
        />
        Rate:
        <input
          type="number"
          onChange={(e) => setRate(e.target.value)}
          value={rate}
          className="form-control"
        />
        PosterUrl
        <input
          type="url"
          onChange={(e) => setPoster(e.target.value)}
          value={poster}
          className="form-control"
        />
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default AddMovie;
