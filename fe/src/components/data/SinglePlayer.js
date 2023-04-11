import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Badge from "react-bootstrap/Badge";
// import Button from "react-bootstrap/Button";
import ActionButton from "./ActionButton";

const SingerPlayer = ({
  player: {
    _id,
    long_name,
    player_positions,
    value_eur,
    age,
    dob,
    club_name,
    nationality_name,
    player_face_url,
  },
}) => (
  <Card className="shadow" border="success">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="player-name">{long_name}</p>
          </Col>
          <Col className="text-right">
            <ActionButton url={player_face_url} _id={_id} />
          </Col>
        </Row>
      </Card.Title>
      <Row>
        <Col>
          <Card.Text>
            <span className="label-title">Age: </span>
            {age}
          </Card.Text>
          <Card.Text>
            <span className="label-title">Birthday: </span>
            {dob}
          </Card.Text>
          <Card.Text>
            <span className="label-title">Position: </span>
            {player_positions}
          </Card.Text>
          <Card.Text>
            <span className="label-title">Club name: </span>
            {club_name}
          </Card.Text>
          <Card.Text>
            <span className="label-title">Nationality: </span>
            {nationality_name}
          </Card.Text>
          <Card.Text>
            <span className="label-title">Value: </span>
            {value_eur}€
          </Card.Text>
        </Col>
        <Col>
          <p className="text-right">
            <img
              src={player_face_url}
              alt="face_player"
              style={{ width: "120px", height: "120px" }}
            />
          </p>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default SingerPlayer;
