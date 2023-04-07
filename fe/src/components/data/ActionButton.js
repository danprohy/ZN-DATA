import Button from "react-bootstrap/Button";
import openIcon from "../../assets/img/openIcon.svg";
import editIcon from "../../assets/img/editIcon.svg";
import removeIcon from "../../assets/img/remove.svg";

const ActionButton = ({url, _id}) => {
    return (
        <>
            <Button className="player-button" href={url} target="_blank">
                <img src={openIcon} alt="open" width="16" height="16" />
            </Button>
            <Button className="player-button" >
                <img src={editIcon} alt="edit" width="16" height="16" />
            </Button>
            <Button className="player-button">
                <img src={removeIcon} alt="remove" width="16" height="16" />
            </Button>
        </>
    );
};

export default ActionButton;