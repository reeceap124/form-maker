import React, { useState } from "react";
import "./ButtonNav.scss";
import UI from "../../UI";
import {
  faPlus,
  faHandshake,
  faTools,
  faList,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonNav = (props) => {
  const Button = UI.CircleButton;
  const [open, setOpen] = useState(false);

  const toggleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="buttonNav">
      <div className={"itemsWrapper " + (open ? "buttonNavOpen" : null)}>
        <Button labelOpen={open} label="New Team">
          <FontAwesomeIcon icon={faHandshake} />
        </Button>
        <Button labelOpen={open} label="New Project">
          <FontAwesomeIcon icon={faTools} />
        </Button>
        <Button labelOpen={open} label="New Form">
          <FontAwesomeIcon icon={faList} />
        </Button>
      </div>
      <Button onClick={toggleOpen}>
        {open ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </Button>
    </div>
  );
};

export default ButtonNav;
