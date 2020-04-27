import React from 'react'
import PropTypes from 'prop-types'

import './MainTitle.sass'

const MainTitle = ({subTitle, title}) => {
  return (
    <div className="MainTitle">
      <div className="MainTitle__title">{subTitle}</div>
      <h1>{title}</h1>
    </div>
  );
}

MainTitle.propTypes = {

}

export default MainTitle
