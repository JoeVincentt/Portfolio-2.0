import React from "react";
import posed from "react-pose";
import "./Projects.css";
import { IconContext } from "react-icons";
import Slider from "react-slick";

const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "productSlider"
};
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.3
  },
  press: {
    scale: 1.3
  }
});

const ProjectSix = () => {
  return (
    <div className="container center-align">
      <IconContext.Provider
        value={{
          size: "30px",
          className: "global-class-name"
        }}
      >
        <div className="row">
          <div className="col s10 m9 l9 offset-s1">
            <div className="center-align center">
              <Slider {...settings}>
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/2.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/3.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/4.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/5.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/6.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/7.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/8.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/dietinfo/10.png"
                  alt=""
                  className="responsive-img"
                />
              </Slider>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h5 className="white-text">Check out code </h5>
              <a
                className="pulsate-fwd"
                href="https://github.com/JoeVincentt/DietInfo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <img
                  src="images/Projects/github.png"
                  alt="Github"
                  style={{ width: "50px", cursor: "pointer" }}
                  className="pulsate-fwd"
                />
              </a>
            </div>
          </div>{" "}
          <div className="col  m3 l3 hide-on-small-only">
            <ul
              className="transparent center row z-depth-0"
              style={{ overflow: "visible" }}
            >
              <div className="valign-wrapper">
                {" "}
                <div className="container">
                  {" "}
                  <Box>
                    <li className="z-depth-0">
                      <img
                        className="skills-img"
                        src="images/Skills/reactx.png"
                        alt="ReactJS"
                        style={{ height: "45px" }}
                      />
                    </li>
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/expo.png"
                        alt="mdl"
                        style={{ height: "45px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/native-base.png"
                        alt="css"
                        style={{ width: "45px" }}
                      />
                    </li>{" "}
                  </Box>{" "}
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/firebase.png"
                        alt="css"
                        style={{ width: "45px" }}
                      />
                    </li>{" "}
                  </Box>{" "}
                </div>
              </div>{" "}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ProjectSix;
