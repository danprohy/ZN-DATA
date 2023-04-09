import { React, useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DataContexts } from "../../contexts/DataContexts";

const UpdatePlayerModal = () => {
  // Context
  const {
    dataState: { player },
    showUpdateModal,
    setShowUpdateModal,
    updateData,
  } = useContext(DataContexts);

  // State to save data when user type
  const [updatedData, setUpdatedData] = useState(player);

  useEffect(() => {
    setUpdatedData(player);
  }, [player]);

  const {
    long_name,
    age,
    dob,
    player_positions,
    club_name,
    nationality_name,
    value_eur,
    player_face_url,
  } = updatedData;
  const onChangeUpdatedData = (event) =>
    setUpdatedData({ ...updatedData, [event.target.name]: event.target.value });

  const closeModal = () => {
    setUpdatedData(player);
    setShowUpdateModal(false);
  };

  // Submit
  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateData(updatedData);
    setShowUpdateModal(false);
  };
  //   const resetAfterAddData = () => {
  //     setNewPlayer({
  //       long_name: "",
  //       age: "",
  //       dob: "",
  //       player_positions: "",
  //       club_name: "",
  //       nationality_name: "",
  //       value_eur: "",
  //       player_face_url: "",
  //     });
  //     setShowAddModal(false);
  //   };

  return (
    <Modal show={showUpdateModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Make updating...</Modal.Title>
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
              onChange={onChangeUpdatedData}
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
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Date of birth: YYYY-MM-DD"
              name="dob"
              value={dob}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Position"
              name="player_positions"
              value={player_positions}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Club name"
              name="club_name"
              value={club_name}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Nationality"
              name="nationality_name"
              value={nationality_name}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Transfer market: €"
              name="value_eur"
              value={value_eur}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Face_URL: https://"
              name="player_face_url"
              value={player_face_url}
              onChange={onChangeUpdatedData}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            UPDATE
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdatePlayerModal;
