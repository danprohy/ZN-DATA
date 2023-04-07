import {React, useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DataContexts } from "../../contexts/DataContexts";


const AddPlayerModal = () => {
    // Context
    const {showAddModal, setShowAddModal} = useContext(DataContexts);

    const closeModal = () =>{
        setShowAddModal(false);
    }
  return (
    <Modal show={showAddModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Please complete the form</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Long Name"
              name="long_name"
              required
              aria-describedby="title-help"
            />
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Age" name="age" />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Date of birth: YYYY-MM-DD"
              name="dob"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Position"
              name="player_positions"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Nationality"
              name="nationality_name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Transfer market: €"
              name="value_eur"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Face_URL: https://"
              name="player_face_url"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cancel</Button>
            <Button variant="primary" type="submit">ADD</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPlayerModal;
