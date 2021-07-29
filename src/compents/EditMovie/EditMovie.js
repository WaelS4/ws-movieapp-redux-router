import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../../redux/Action/Action";

const EditMovie = ({ movie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [poster, setPoster] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const edit = (e) => {
    e.preventDefault();
    dispatch(
      editMovie({ id: movie.id, title, rate, description, posterUrl: poster })
    );
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={edit}>
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditMovie;
