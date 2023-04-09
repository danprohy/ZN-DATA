import Button from "react-bootstrap/Button";
import openIcon from "../../assets/img/openIcon.svg";
import editIcon from "../../assets/img/editIcon.svg";
import removeIcon from "../../assets/img/remove.svg";
import { useContext } from "react";
import { DataContexts } from "../../contexts/DataContexts";

const ActionButton = ({ url, _id }) => {
  const { deleteData, findData, setShowUpdateModal } = useContext(DataContexts);

  const selectPlayer = playerId =>{
    findData(playerId);
    setShowUpdateModal(true);
  };

  return (
    <>
      <Button className="player-button" href={url} target="_blank">
        <img src={openIcon} alt="open" width="16" height="16" />
      </Button>
      <Button className="player-button" onClick={selectPlayer.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="16" height="16" />
      </Button>
      <Button className="player-button" onClick={deleteData.bind(this, _id)}>
        <img src={removeIcon} alt="remove" width="16" height="16" />
      </Button>
    </>
  );
};

export default ActionButton;
