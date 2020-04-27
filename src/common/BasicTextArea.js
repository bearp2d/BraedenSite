import React from "react";
import PropTypes from "prop-types";

import './BasicInput.sass'

const BasicTextArea = ({
  input,
  label,
  meta: { touched, error },
  required,
  ...rest
}) => {
  return (
      <div className="BasicTextArea">
      <textarea {...input} {...rest} />
    </div>
  );
};

BasicTextArea.propTypes = {
  input: PropTypes.object.isRequired
};

export default BasicTextArea;
