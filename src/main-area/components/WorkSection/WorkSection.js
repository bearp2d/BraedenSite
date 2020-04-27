import React from 'react'
import { Grid, Image } from "semantic-ui-react";

import WorkCard from '../WorkCard'
import { workWebData, workMobileData } from "config/data";

import './WorkSection.sass'

const WorkSection = ({type}) => {
  return (
    <div className="WorkSection">
      <Grid>
        {type === "web"
          ? workWebData.map((item, index) => {
              return (
                <Grid.Column mobile={16} tablet={8} computer={8} key={index}>
                  <WorkCard data={item} key={index} type={type} />
                </Grid.Column>
              );
            })
          : workMobileData.map((item, index) => {
              return (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={8}
                  key={index}
                >
                  <WorkCard data={item} key={index} type={type} />
                </Grid.Column>
              );
            })}
      </Grid>
    </div>
  );
}

export default WorkSection;
