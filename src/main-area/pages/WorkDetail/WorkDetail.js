import React, { useState, useEffect } from 'react'
import { workWebData, workMobileData } from "config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames'
import { Link } from "react-router-dom";
import './WorkDetail.sass'

const WorkDetail = (props) => {

    const [data, setData] = useState({})

    useEffect(() => {
       const workId = props.match.params.id
       const workType = props.match.params.type
        if(workType==='web')
            setData(workWebData[workId])
        else
            setData(workMobileData[workId]);

    })

  return (
    <div className="WorkDetail">
      <div className="WorkDetail__image flexItem">
        <img src={data.image} alt="photo" />
      </div>
      <div className="WorkDetail__content flexItem">
        <h3>{data.company}</h3>
        <h1>{data.project}</h1>
        <div className="WorkDetail__content__info">
          <h4>Technology stack:</h4>
          <h4>{data.techStack}</h4>
        </div>
        <div className="WorkDetail__content__info">
          <h4>Client:</h4>
          <h4>{data.client}</h4>
        </div>
        <div className="WorkDetail__content__info">
          <h4>Platform:</h4>
          <h4>{data.platform}</h4>
        </div>
        <div className="WorkDetail__content__info">
          <h4>Delivery:</h4>
          <h4>{data.delivery}</h4>
        </div>
        <div className="WorkDetail__content__info">
          <h4>Link:</h4>
          <a href={data.link} target="_blank">{data.link}</a>
        </div>
        <div className="WorkDetail__content__info">
          <h4>Release:</h4>
          <h4>{data.release}</h4>
        </div>
        <div className="WorkDetail__content__desc">{data.desc}</div>
      </div>
          <div className={classNames("WorkDetail__move", "WorkDetail__move--back")}>
        {props.match.params.id !== "0" && (
          <Link to={`/work/${props.match.params.type}/${props.match.params.id - 1}`}>
            <FontAwesomeIcon icon="chevron-left" size="2x" color="orange" />
          </Link>
        )}
      </div>
      <div className="WorkDetail__move WorkDetail__move--forw">
              {parseInt(props.match.params.id) !== (props.match.params.type === 'web' ? workWebData.length - 1 : workMobileData.length - 1)  && (
                  <Link to={`/work/${props.match.params.type}/${parseInt(props.match.params.id) + 1}`}>
            <FontAwesomeIcon icon="chevron-right" size="2x" color="orange" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default WorkDetail
