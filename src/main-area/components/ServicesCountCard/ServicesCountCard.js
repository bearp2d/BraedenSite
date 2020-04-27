import React from 'react'
import PropTypes from 'prop-types'

import './ServicesCountCard.sass'

const ServicesCountCard = ({data}) => {
  return (
    <div className="ServicesCountCard">
        <h1>{data.count}</h1>
        <h2>{data.type}</h2>
    </div>
  )
}

ServicesCountCard.propTypes = {

}

export default ServicesCountCard
