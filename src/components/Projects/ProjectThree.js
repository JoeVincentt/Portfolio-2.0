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

const ProjectThree = () => {
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
                  <Slide src="images/Projects/ProjectsPictures/storyteller/1.png" />
                  <Slide src="images/Projects/ProjectsPictures/storyteller/2.png" />
                  <Slide src="images/Projects/ProjectsPictures/storyteller/3.png" />
                  <Slide src="images/Projects/ProjectsPictures/storyteller/4.png" />
                </Slider>
              </div>
            </div>

            <h5 className="white-text">Check out code </h5>

            <a
              className="pulsate-fwd"
              href="https://github.com/JoeVincentt/StoryTeller-1.0"
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
                        src="images/Skills/handlebars.svg"
                        alt="handlebars"
                        style={{ height: "30px" }}
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

export default ProjectThree;
