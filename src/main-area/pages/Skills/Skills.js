import React from 'react'
import PropTypes from 'prop-types'
import MainTitle from '../../components/MainTitle'
import { Grid, Image } from 'semantic-ui-react'

import SkillProgress from '../../components/SkillProgress'

import './Skills.sass'

const data = [
    {
        name: "PHP",
        rate: "100",
        color: "teal"
    },
    {
        name: "HTML/CSS/SCSS",
        rate: "100",
        color: "olive"
    },
  {
    name: "Javascript(ES5/ES6/ES7)",
    rate: "90",
    color: "blue"
  },

  {
    name: "TypeScript",
    rate: "80",
    color: "violet"
  },

  {
    name: "React/Redux/MobX",
    rate: "100",
    color: "blue"
    },
    {
        name: "JEST/Enzyme",
        rate: "80",
        color: "brown"
    },
  {
    name: "Next.js",
    rate: "70",
    color: "orange"
  },
  {
    name: "StoryBook",
    rate: "70",
    color: "purple"
  },

  {
    name: "Angular 2+",
    rate: "80",
    color: "red"
  },
  {
    name: "Vue/VueX",
    rate: "100",
    color: "teal"
  },
  {
    name: "Node",
    rate: "90",
    color: "green"
  },
  {
    name: "GraphQL/Appollo",
    rate: "80",
    color: "olive"
  },
  {
    name: "Bootstrap",
    rate: "90",
    color: "pink"
  },
  {
    name: "Semantic UI",
    rate: "90",
    color: "black"
  },
  {
    name: "React-Native/Redux/MobX",
    rate: "90",
    color: "blue"
  },
  {
      name: "Ionic Framework",
      rate: "70",
      color: "yellow"
  }
];

const Skills = props => {
  return (
    <div className="Skills">
      <MainTitle subTitle="MY SPECIALTY" title="MY SKILLS" />
      <h4>Aim for the difficult first, instead of avoiding it</h4>
      <div className="Skills__progressContainer">
        <Grid>
          {data.map((item, index) => {
            return (
              <Grid.Column mobile={16} tablet={8} computer={8} key={index}>
                <SkillProgress data={item} key={index} />
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

Skills.propTypes = {

}

export default Skills
