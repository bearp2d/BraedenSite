import React from 'react'
import Slider from "react-slick";
import { Animated } from "react-animated-css"
import { Link } from "react-router-dom";
import './Home.sass'


const Home = props => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
      dotsClass: "slick-dots slick-thumb",
    };
  return (
    <div className="Home">
      <Slider {...settings}>
        <div className="Home__Slide01">
            <Animated animationIn="fadeInUp" isVisible={true}>
                <div className="Home__Slide01__textBlock">
                    <h1>
                    Hi! <br />
                    I'm Braden
                    </h1>
                          <a href="#" download>DownLoad CV</a>
                </div>
            </Animated>
        </div>
        <div className="Home__Slide02">
            <Animated animationIn="fadeInUp" isVisible={true}>
                <div className="Home__Slide02__textBlock">
                    <h1>
                    I am <br />a Full Stack Developer
                    </h1>
                    <Link to="/work">View Portfolio</Link>
                </div>
          </Animated>
        </div>
      </Slider>
    </div>
  );
}

export default Home
