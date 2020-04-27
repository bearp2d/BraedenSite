import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Responsive from "react-responsive";
import classNames from 'classnames'
import LinesEllipsis from "react-lines-ellipsis"
import { Link } from "react-router-dom";
import { Animated } from 'react-animated-css'
import './WorkCard.sass'

const Mobile = props => <Responsive {...props} maxWidth={767} />;

const WorkCard = ({data, type}) => {

    const [hover, setHover] = useState(false)

  return (
      <Animated animationIn='zoomIn' isVisible={true} >
      <div className="WorkCard" 
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
     >
     <Mobile>
        <Link
            to={`/work/${type}/${data.id}`}
            className="WorkCard__mobile"
        />
     </Mobile>
        <Link
            to={`/work/${type}/${data.id}`}
            className={classNames("WorkCard__link", hover? 'WorkCard__link--hover': '')}
        />
        <img src={data.image} alt="logo" />
        <div className="WorkCard__companyName"> {data.company} </div>
        <div className="WorkCard__projectTitle">{data.project}</div>
        <div className="WorkCard__techStack">
            <h5>Technology stack: </h5>
            {data.techStack}
        </div>
        <div className="WorkCard__desc">
            <LinesEllipsis
            text={data.desc}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            />
        </div>
    </div>
    </Animated>
  );
}

WorkCard.propTypes = {

}

export default WorkCard
