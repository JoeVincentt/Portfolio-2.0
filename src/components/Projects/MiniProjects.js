import React from "react";
import posed from "react-pose";

import { IconContext } from "react-icons";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
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

const MiniProjects = () => {
  return (
    <div className="container center-align">
      <IconContext.Provider
        value={{
          size: "30px",
          className: "global-class-name"
        }}
      >
        <div className="row">
          <div className="col hide-on-small-only m3 l3">
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
                        src="images/Skills/react.png"
                        alt="ReactJS"
                        style={{ height: "45px" }}
                      />
                    </li>
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/mongodbc.png"
                        alt="MongoDB"
                        style={{ height: "40px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/nodejs.png"
                        alt="NodeJS"
                        style={{ height: "45px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/graphql.png"
                        alt="GraphQL"
                        style={{ height: "40px" }}
                      />
                    </li>{" "}
                  </Box>{" "}
                </div>
              </div>{" "}
            </ul>
          </div>
          <div className="col s12 m6 l6">
            <div className="center-align center">
              <Slider {...settings}>
                <img
                  src="images/Projects/ProjectsPictures/contactmanager.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/spacex.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/facefinder/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/facefinder/2.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/githubfinder/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/githubfinder/2.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/weather/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/weather/2.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/calorietracker/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/calorietracker/2.png"
                  alt=""
                  className="responsive-img"
                />
              </Slider>
            </div>

            <h5 className="white-text">Check out code </h5>

            <a
              className="pulsate-fwd"
              href="https://github.com/JoeVincentt"
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
                        src="images/Skills/css.png"
                        alt="ReactJS"
                        style={{ height: "60px" }}
                      />
                    </li>
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/clarifai.png"
                        alt="bootstrap"
                        style={{ height: "40px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/bootstrap.png"
                        alt="bootstrap"
                        style={{ height: "45px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/js.png"
                        alt="js"
                        style={{ height: "40px" }}
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

export default MiniProjects;
