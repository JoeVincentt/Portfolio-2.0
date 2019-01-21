import React from "react";
import { Carousel } from "react-materialize";
import posed from "react-pose";

import "../../Skills/Skills.css";
import "../Projects.css";
import { IconContext } from "react-icons";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 0.9
  },
  press: {
    scale: 1.1
  }
});

const ProjectOne = () => {
  return (
    <IconContext.Provider
      value={{
        size: "30px",
        className: "global-class-name"
      }}
    >
      <div className="container center project-container-align">
        <div className="container white-text">
          <div className="row">
            <div className="col m12 s10 offset-s1">
              <Carousel
                fixedItem={<h2 className="center">Project name</h2>}
                images={[
                  "https://lorempixel.com/800/400/food/1",
                  "https://lorempixel.com/800/400/food/2",
                  "https://lorempixel.com/800/400/food/3",
                  "https://lorempixel.com/800/400/food/4",
                  "https://lorempixel.com/800/400/food/5"
                ]}
              />
              <div className="card transparent center">
                <div
                  className="container center"
                  style={{ overflow: "hidden" }}
                />
                <div className="container center">
                  <div className="card-tabs center">
                    <div className="col m12 s10 offset-s1 offset-m2">
                      <ul
                        className="tabs tabs-fixed-width center margin-tab-md transparent"
                        style={{ overflow: "visible" }}
                      >
                        <Box>
                          <li
                            className="tab center"
                            style={{ zIndex: "2000", marginLeft: "15px" }}
                          >
                            <a href="#Description" className="active">
                              <img
                                src="images/Projects/info.png"
                                alt="Description"
                                style={{ width: "45px" }}
                              />
                            </a>
                          </li>
                        </Box>
                        <Box>
                          <li className="tab">
                            <a href="#Technology">
                              <img
                                src="images/Projects/tools.png"
                                alt="Technology"
                                style={{ height: "40px" }}
                              />
                            </a>
                          </li>{" "}
                        </Box>
                        <Box>
                          <li className="tab">
                            <a href="#Github">
                              <img
                                src="images/Projects/github.png"
                                alt="Github"
                                style={{ height: "45px" }}
                              />
                            </a>
                          </li>{" "}
                        </Box>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content transparent center lighten-4">
                    <div className="container center">
                      <div id="Description">Description</div>
                      <div id="Technology">Technology</div>
                      <div id="Github">
                        <h5>Check out code </h5>
                        <a
                          className="pulsate-fwd"
                          href="https://github.com/JoeVincentt"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {" "}
                          <FaArrowAltCircleRight className="pulsate-fwd" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default ProjectOne;
