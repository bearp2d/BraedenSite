import React from "react";
import PropTypes from "prop-types";

import './BasicInput.sass'

const BasicInput = ({
  input,
  label,
  meta: { touched, error },
  required,
  ...rest
}) => {
  return (
    <div className="BasicInput">
      <input {...input} {...rest} />
    </div>
  );
};

BasicInput.propTypes = {
  input: PropTypes.object.isRequired
};

export default BasicInput;
