import { React, useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DataContexts } from "../../contexts/DataContexts";

const AddPlayerModal = () => {
  // Context
  const { showAddModal, setShowAddModal, addData } = useContext(DataContexts);

  // State to save data when user type
  const [newPlayer, setNewPlayer] = useState({
    long_name: "",
    age: "",
    dob: "",
    player_positions: "",
    club_name: "",
    nationality_name: "",
    value_eur: "",
    player_face_url: "",
  });

  const {
    long_name,
    age,
    dob,
    player_positions,
    club_name,
    nationality_name,
    value_eur,
    player_face_url,
  } = newPlayer;
  const onChangeNewPlayer = (event) =>
    setNewPlayer({ ...newPlayer, [event.target.name]: event.target.value });

  const closeModal = () => {
    setNewPlayer({
      long_name: "",
      age: "",
      dob: "",
      player_positions: "",
      club_name: "",
      nationality_name: "",
      value_eur: "",
      player_face_url: "",
    });
    setShowAddModal(false);
  };

  // Submit
  const onSubmit = async event =>{
    event.preventDefault();
    const {success, message} = await addData(newPlayer);
    setNewPlayer({
        long_name: "",
        age: "",
        dob: "",
        player_positions: "",
        club_name: "",
        nationality_name: "",
        value_eur: "",
        player_face_url: "",
      });
      resetAfterAddData();
  }
  const resetAfterAddData = () => {
    setNewPlayer({
        long_name: "",
        age: "",
        dob: "",
        player_positions: "",
        club_name: "",
        nationality_name: "",
        value_eur: "",
        player_face_url: "",
      });
      setShowAddModal(false);
  }

  return (
    <Modal show={showAddModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Please complete the form</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Long Name"
              name="long_name"
              required
              aria-describedby="long_name-help"
              value={long_name}
              onChange={onChangeNewPlayer}
            />
            <Form.Text id="long_name-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Age"
              name="age"
              value={age}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Date of birth: YYYY-MM-DD"
              name="dob"
              value={dob}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Position"
              name="player_positions"
              value={player_positions}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Club name"
              name="club_name"
              value={club_name}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Nationality"
              name="nationality_name"
              value={nationality_name}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Transfer market: €"
              name="value_eur"
              value={value_eur}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Face_URL: https://"
              name="player_face_url"
              value={player_face_url}
              onChange={onChangeNewPlayer}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            ADD
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPlayerModal;
