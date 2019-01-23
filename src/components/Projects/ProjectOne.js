import React from "react";

import posed from "react-pose";
import Slider from "react-slick";

import { IconContext } from "react-icons";

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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProjectOne = () => {
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
                  src="images/Projects/ProjectsPictures/recipes/1.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/recipes/2.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/recipes/3.png"
                  alt=""
                  className="responsive-img"
                />
                <img
                  src="images/Projects/ProjectsPictures/recipes/4.png"
                  alt=""
                  className="responsive-img"
                />
              </Slider>
            </div>

            <h5 className="white-text">Check out code </h5>

            <a
              className="pulsate-fwd"
              href="https://github.com/JoeVincentt/react-recipes"
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
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ProjectOne;
