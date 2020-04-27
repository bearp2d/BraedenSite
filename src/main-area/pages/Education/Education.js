import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Animated } from "react-animated-css";
import { Accordion, Icon, Transition } from "semantic-ui-react";

import MainTitle from '../../components/MainTitle'

import './Education.sass'


const Education = ({}) => {

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Animated animationIn="slideInUp" isVisible={true}>
      <div className="Education">
        <MainTitle title="EDUCATION" subTitle="EDUCATION" />
        <div className="Education__accordianContainer">
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={() => setActiveIndex(0)}
            >
              <Icon name="dropdown" />
              North Carolina State University
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Bachelor of Computer Science (BCompSc)
                <br />
                2012-2016
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={() => setActiveIndex(1)}
            >
              <Icon name="dropdown" />
              North Carolina State University
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Bachelor of Science (B.S)
                <br />
                2012-2016
              </p>
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    </Animated>
  );
}

Education.propTypes = {

}

export default Education
