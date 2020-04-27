import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from "semantic-ui-react";
import MainTitle from '../../components/MainTitle'
import ServicesCard from '../../components/ServicesCard'
import ServicesCountCard from '../../components/ServicesCountCard'

import { ServicesInfo, ServicesInfo1, ServicesCountData } from "config/data";

import './Services.sass'

const Services = props => {
  return (
    <div className="Services">
      <MainTitle
        title="HERE ARE SOME OF MY EXPERTISE"
        subTitle="WHAT I DO?"
      />
      <div className="Services__cardContainer">
        <Grid columns="equal">
          <Grid.Row>
            {ServicesInfo.map((item, index) => {
              return (
                  <Grid.Column mobile={16} tablet={16} computer={5} key={index}>
                  <ServicesCard info={item} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
      <div className="Services__cardContainer">
        <Grid columns="3">
          <Grid.Row>
            {ServicesInfo1.map((item, index) => {
              return (
                    <Grid.Column mobile={16} tablet={16} computer={5} key={index}>
                        <ServicesCard info={item} />
                    </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
      <div className="Services__countContainer">
        <Grid columns="3">
            <Grid.Row>
                {ServicesCountData.map((item, index) => {
                    return (
                        <Grid.Column mobile={8} tablet={8} computer={4} key={index}>
                        <ServicesCountCard data={item} />
                      </Grid.Column>
                    );
                })}
            </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

Services.propTypes = {

}

export default Services
