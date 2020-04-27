import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import classNames from "classnames";

import BasicButton from "./BasicButton";

import "./BasicForm.sass";

const BasicForm = ({
  className,
  handleSubmit,
  submitButtonText,
  submitting,
  children,
  error,
  pristine,
  valid
}) => {
  return (
    <form
      className={classNames("BasicForm", className)}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {children}
      <div className="BasicForm__btnContainer">
        <BasicButton
          type="submit"
          disabled={pristine || submitting || !valid}
          text={submitButtonText}
        >
        {submitButtonText}
        </BasicButton>
      </div>
      {error && <span> {error} </span>}
    </form>
  );
};

const basicPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  submitButtonText: PropTypes.string
};

BasicForm.propTypes = {
  ...basicPropTypes,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string
};

BasicForm.defaultProps = {
  className: "",
  submitButtonText: "",
  error: ""
};

const WrappedBasicForm = reduxForm()(BasicForm);

WrappedBasicForm.propTypes = {
  ...basicPropTypes,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired
};

export default WrappedBasicForm;
