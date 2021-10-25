import React, { useState } from "react";
import Modal from "./Modal";

import classes from "./Name.module.css";

const Name = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <li className={classes.name}>
        <h2>{props.title}</h2>
        <button className="button" onClick={showModalHandler}>
          Summary
        </button>
      </li>
      {showModal && (
        <Modal onClose={hideModalHandler}>
          {" "}
          <p>{props.summary}</p>{" "}
          <button onClick={hideModalHandler}> Close </button>
          <button> Book Tickets </button>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Name;
