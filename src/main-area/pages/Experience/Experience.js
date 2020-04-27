import React from 'react'

import MainTitle from '../../components/MainTitle'
import ExperienceCard from '../../components/ExperienceCard'

import { ExperienceData } from 'config/data'

import './Experience.sass'



const Experience = props => {
  return (
    <div className="Experience">
          <MainTitle subTitle="EXPERIENCE" title="WORK EXPERIENCE" />
          <div className="Experience__cardContainer">
                {
                  ExperienceData.map((item, index) => {
                        return(
                            <ExperienceCard data={item} />
                        )
                    })
                }
                <div className="Experience__cardContainer__bottom"></div>
          </div>
    </div>
  )
}

export default Experience
