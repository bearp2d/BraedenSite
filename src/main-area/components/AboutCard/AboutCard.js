import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './AboutCard.sass'

const AboutCard = ({info}) => {
  return (
    <Animated animationIn="zoomIn" isVisible={true}>
      <div className="AboutCard" style={{ borderBottomColor: info.color }}>
        <FontAwesomeIcon icon={info.icon} size="2x" color={info.color} />
        <h3>{info.text}</h3>
      </div>
    </Animated>
  );
}

AboutCard.propTypes = {

}

export default AboutCard
