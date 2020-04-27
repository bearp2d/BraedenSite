import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from "react-animated-css";
import { Progress } from "semantic-ui-react";
import './SkillProgress.sass'

const SkillProgress = ({data}) => {
  return (
    <Animated animationIn="pulse" isVisible={true}>
    <div className="SkillProgress">
      <h3>{data.name}</h3>
      <Progress percent={data.rate} color={data.color} progress size="tiny" />
    </div>
    </Animated>
  );
}

SkillProgress.propTypes = {

}

export default SkillProgress
