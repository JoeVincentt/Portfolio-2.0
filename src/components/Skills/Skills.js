import React, { Component } from "react";
import "./Skills.css";
import posed from "react-pose";

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

class Skills extends Component {
  render() {
    return (
      <div className="container center white-text">
        <div className="row center">
          <div className="col m12 s12 l12 ">
            <div className="card transparent z-depth-0">
              <div className="container">
                <div className="card-content skills-desc">
                  <h5>
                    Showing your passion for technology if you DON’T have a tech
                    background You might think that if you don’t have a
                    technology-related degree, don’t have the latest smartphone
                  </h5>
                  <div className="divider" />
                  <div className="container center">
                    <div className="row">
                      <div className="col s6 m6 l6">
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
                                  <a href="#ReactJS" className="active">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/react.png"
                                      alt="ReactJS"
                                      style={{ height: "45px" }}
                                    />
                                  </a>
                                </li>
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#MongoDB">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/mongodbc.png"
                                      alt="MongoDB"
                                      style={{ height: "40px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#NodeJS">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/nodejs.png"
                                      alt="NodeJS"
                                      style={{ height: "45px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#GraphQL">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/graphql.png"
                                      alt="GraphQL"
                                      style={{ height: "40px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>{" "}
                            </div>
                          </div>{" "}
                        </ul>
                      </div>
                      <div className="col s6 m6 l6">
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
                                  <a href="#ReactJS" className="active">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/react.png"
                                      alt="ReactJS"
                                      style={{ height: "45px" }}
                                    />
                                  </a>
                                </li>
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#MongoDB">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/mongodbc.png"
                                      alt="MongoDB"
                                      style={{ height: "40px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#NodeJS">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/nodejs.png"
                                      alt="NodeJS"
                                      style={{ height: "45px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <a href="#GraphQL">
                                    <img
                                      className="skills-img"
                                      src="images/Skills/graphql.png"
                                      alt="GraphQL"
                                      style={{ height: "40px" }}
                                    />
                                  </a>
                                </li>{" "}
                              </Box>{" "}
                            </div>
                          </div>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
