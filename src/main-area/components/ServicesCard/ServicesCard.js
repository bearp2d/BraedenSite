import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ServicesCard.sass";

const ServicesCard = ({ info }) => {
  return (
    <Animated
      animationIn="zoomInDown"
      isVisible={true}
    >
      <div className="ServicesCard" style={{ borderBottomColor: info.color }}>
        <span
          className={classNames(
            "ServicesCard__icon",
            `ServicesCard__icon--${info.icon}`
          )}
        >
          <div>
            {info.icon !== "graphql" ? (
              <FontAwesomeIcon
                icon={["fab", `${info.icon}`]}
                size="3x"
                color
              />
            ) : (
              <FontAwesomeIcon
                icon={["fac", `${info.icon}`]}
                size="3x"
                color
              />
            )}
          </div>
        </span>
        <div className="ServicesCard__desc">
          <h3>{info.title}</h3>
          <h4>{info.content}</h4>
        </div>
      </div>
    </Animated>
  );
};

ServicesCard.propTypes = {

}

export default ServicesCard
