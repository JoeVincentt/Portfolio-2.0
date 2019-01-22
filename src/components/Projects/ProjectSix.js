import React from "react";
import { Slider, Slide } from "react-materialize";
import posed from "react-pose";

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
          <div className="col s12 m9 l9">
            <div className="center-align center">
              <div>
                <Slider>
                  <Slide src="images/Projects/ProjectsPictures/portfolio/1.png" />
                  <Slide src="images/Projects/ProjectsPictures/portfolio/2.png" />
                  <Slide src="images/Projects/ProjectsPictures/portfolio/3.png" />
                  <Slide src="images/Projects/ProjectsPictures/portfolio/4.png" />
                </Slider>
              </div>
            </div>

            <h5 className="white-text">Check out code </h5>

            <a
              className="pulsate-fwd"
              href="https://github.com/JoeVincentt/portfolio1.0"
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
                        src="images/Skills/mdl.png"
                        alt="mdl"
                        style={{ height: "45px" }}
                      />
                    </li>{" "}
                  </Box>
                  <Box>
                    <li>
                      <img
                        className="skills-img"
                        src="images/Skills/css.png"
                        alt="css"
                        style={{ width: "60px" }}
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