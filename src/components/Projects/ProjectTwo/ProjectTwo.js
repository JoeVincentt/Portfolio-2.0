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
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 0.9,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const ProjectTwo = () => {
  return (
    <IconContext.Provider
      value={{
        size: "30px",
        className: "global-class-name"
      }}
    >
      <div className="container center project-container-align ">
        <div className="container white-text">
          <div className="row">
            <div className="col m12 s10">
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
              <div className="card transparent">
                <div className="container" style={{ overflow: "hidden" }} />
                <div className="container">
                  <div className="card-tabs center">
                    <div className="container">
                      <ul
                        className="tabs tabs-fixed-width transparent"
                        style={{ overflow: "visible" }}
                      >
                        <Box>
                          <li className="tab" style={{ zIndex: "2000" }}>
                            <a href="#Description2" className="active">
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
                            <a href="#Technology2">
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
                            <a href="#Github2">
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
                  <div className="card-content transparent lighten-4">
                    <div className="container center">
                      <div id="Description2">Description</div>
                      <div id="Technology2">Technology</div>
                      <div id="Github2">
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

export default ProjectTwo;
