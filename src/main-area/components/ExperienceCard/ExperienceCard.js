import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animated } from "react-animated-css";
import './ExperienceCard.sass'

const ExperienceCard = ({data}) => {
  return (
    <Animated animationIn="rotateInDownLeft" isVisible={true}>
      <div className="ExperienceCard">
        <div
          className="ExperienceCard__icon"
          style={{ backgroundColor: data.color }}
        >
          <FontAwesomeIcon icon="pen" />
        </div>
        <div className="ExperienceCard__content">
          <h4>{data.company}</h4>
          <h2>{data.title}</h2> <h3>{data.date}</h3>
          <p>{data.content}</p>
        </div>
      </div>
    </Animated>
  );
}

ExperienceCard.propTypes = {

}

export default ExperienceCard

