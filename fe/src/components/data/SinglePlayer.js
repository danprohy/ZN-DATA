import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ActionButton from "./ActionButton";

const SingerPlayer = ({player: {_id, long_name, player_positions, value_eur, age, dob, club_name, nationality_name, player_face_url}}) => (
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
            <Card.Text>{age}</Card.Text>
            <Card.Text>{dob}</Card.Text>
            <Card.Text>{player_positions}</Card.Text>
            <Card.Text>{club_name}</Card.Text>
            <Card.Text>{nationality_name}</Card.Text>
            <Card.Text>{value_eur}</Card.Text>
        </Card.Body>
    </Card>
);

export default SingerPlayer;