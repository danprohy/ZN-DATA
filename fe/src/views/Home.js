import React from "react";
import { DataContexts } from "../contexts/DataContexts";
import { useContext, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { AuthContexts } from "../contexts/AuthContexts";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SingerPlayer from "../components/data/SinglePlayer";
import AddPlayerModal from "../components/data/AddPlayerModal";
import AddIcon from "../assets/img/addIcon.svg";

const Home = () => {
  // Context
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContexts);

  const {
    dataState: { players, dataLoading },
    getData, // Lay ham getData khi moc ra
    setShowAddModal,
  } = useContext(DataContexts);

  // Su dung ngay lap tuc khi bat dau
  useEffect(() => {
    getData();
  }, []);

  let body = null;
  if (dataLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (players.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username} </Card.Header>
          <Card.Body>
            <Card.Title>
              Welcome to Player Database, you haven't add your player yet.
            </Card.Title>
            <Card.Text>Click the button below to add your player</Card.Text>
            <Button variant="primary">ADD</Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {players.map((player) => (
            <Col key={player._id} className="my-2">
              <SingerPlayer player={player} />
            </Col>
          ))}
        </Row>
        {/* Add Modal */}
        <OverlayTrigger placement="left" overlay={<Tooltip>Add new player database</Tooltip>}>
          <Button
            className="btn-floating"
            onClick={setShowAddModal.bind(this, true)}
          >
            <img src={AddIcon} alt="Add" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }
  return (
    <>
      {body}
      <AddPlayerModal />
    </>
  );
};

export default Home;
