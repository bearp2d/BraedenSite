import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import classNames from 'classnames'

import './Sidebar.sass'

import profile from '../../images/profile.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ active, changeNav}) => {
  return (
    <div className="Sidebar">
      <img src={profile} alt="profile" />
      <h1>Braeden Earp</h1>
      <h5>
        <a href="#">FULL STACK DEVELOPER</a> IN United States
      </h5>
      <div className="Sidebar__navbar">
        <ul>
          <li>
            <NavLink
              to="/home"
              className={classNames(
                active === "home" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={classNames(
                active === "about" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("about")}
            >
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={classNames(
                active === "services" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("services")}
            >
              {" "}
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={classNames(
                active === "skills" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("skills")}
            >
              {" "}
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={classNames(
                active === "education" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("education")}
            >
              {" "}
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={classNames(
                active === "experience" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("experience")}
            >
              {" "}
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={classNames(
                active === "work" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("work")}
            >
              {" "}
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/updates"
              className={classNames(
                active === "updates" ? "Sidebar__navbar--active" : ""
              )}
              onClick={() => changeNav("updates")}
            >
              {" "}
              Updates
            </NavLink>
          </li>
        </ul>
        <div className="Sidebar__socialLinks">
          <a
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              color="#0077b5"
            />
          </a>
          <a href="https://github.com/bearp2d" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              color="#333"
            />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "angellist"]}
              size="2x"
              color="#333"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {

}

export default Sidebar
