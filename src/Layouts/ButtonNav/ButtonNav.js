import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/new/team" onClick={() => setOpen(false)}>
          <Button labelOpen={open} label="New Team">
            <FontAwesomeIcon icon={faHandshake} />
          </Button>
        </Link>
        <Link to="/new/project" onClick={() => setOpen(false)}>
          <Button labelOpen={open} label="New Project">
            <FontAwesomeIcon icon={faTools} />
          </Button>
        </Link>
        <Link to="/new/form" onClick={() => setOpen(false)}>
          <Button labelOpen={open} label="New Form">
            <FontAwesomeIcon icon={faList} />
          </Button>
        </Link>
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
