/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './BasicButton.sass'

function BasicButton({
  children, className, onClick, ...props
}) {
  return (
    <button className={classNames('BasicButton', className)} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

BasicButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

BasicButton.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false,
  children: false,
}

export default BasicButton
