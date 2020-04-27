import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AppHeader.sass";

const AppHeader = ({ onOpen }) => {
  return (
    <div className="AppHeader">
      <FontAwesomeIcon icon="bars" onClick={onOpen} />
    </div>
  );
};

AppHeader.propTypes = {
  onOpen: PropTypes.func.isRequired
};

export default AppHeader;
