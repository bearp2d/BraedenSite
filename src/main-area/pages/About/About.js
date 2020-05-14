import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from "semantic-ui-react";
import { Animated } from "react-animated-css";
import AboutCard from "../../components/AboutCard";
import ScrollTop from 'common/ScrollTop'
import MainTitle from '../../components/MainTitle'
import { Link } from "react-router-dom";

import './About.sass'


const Info = [
  {
    icon: "globe-asia",
    text: "Web Development",
    color: "#2c98f0"
  },
  {
    icon: "lightbulb",
      text: "Front-End Development",
    color: "#f9bf3f"
  },
  {
      icon: "database",
      text: "Back-End Development",
        color: "#a84cb8"
  },
  {
    icon: "mobile-alt",
      text: "Mobile Development",
    color: "#ec5453"
  }
];

const About = props => {
  return (
    <div className="About">
      <ScrollTop />
      <MainTitle title="Who am I?" subTitle="About me" />
      <h4>
        <strong>Hi, I'm Braeden Earp</strong> from United States. I am an experienced
        Full Stack developer interested in building usable, useful,
        well-constructed Web & Mobile Application. Interested in continuation
        of learning and cooperation with excellent people.
      </h4>
      <h4>
        I am very passionate and always keep stick to the result-driven
        working manner with great attention to details, periodic through code
        review, and critical thinking. The best quality, accurate timeline,
        and long-term maintenance are what I guarantee to my clients.
      </h4>
      <h4>
        You can check this code in{" "}
        <a
          href="https://github.com/bearp2d/BraedenSite.git"
          target="_blank"
        >
          here
        </a>
      </h4>
      <div className="About__cardContainer">
        <Grid>
          <Grid.Row>
            {Info.map((item, index) => {
              return (
                <Grid.Column mobile={16} tablet={8} computer={4} key={index}>
                  <AboutCard info={item} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
      <Animated animationIn="slideInUp" isVisible={true}>
        <div className="About__hireme">
          <h1>
            I am happy to know you <br />
            that 35+ projects done sucessfully!
          </h1>
          <Link to="/contact" className="About__hireme__btn">
            Hire me
          </Link>
        </div>
      </Animated>
    </div>
  );
}

About.propTypes = {

}

export default About
