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
    scale: 1.3
  },
  press: {
    scale: 1.3
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
                <div className="card-content">
                  <div className="row ">
                    <div className="col s6 m4 l4 offset-l2 offset-m1">
                      <ul className="center-align">
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                      </ul>
                    </div>
                    <div className="col s6 m4 l4 offset-l1 offset-m2">
                      <ul className="left-align">
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                        <li>Problem solving</li>
                      </ul>
                    </div>
                  </div>
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
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/mongodbc.png"
                                    alt="MongoDB"
                                    style={{ height: "40px" }}
                                  />
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/nodejs.png"
                                    alt="NodeJS"
                                    style={{ height: "45px" }}
                                  />
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/graphql.png"
                                    alt="GraphQL"
                                    style={{ height: "40px" }}
                                  />
                                </li>{" "}
                              </Box>{" "}
                              <Box>
                                <li className="z-depth-0">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/python.png"
                                    alt="python"
                                    style={{ height: "60px", margin: "-10px" }}
                                  />
                                </li>
                              </Box>
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/git.png"
                                    alt="git"
                                    style={{ height: "40px" }}
                                  />
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
                                  <img
                                    className="skills-img"
                                    src="images/Skills/react.png"
                                    alt="ReactJS"
                                    style={{ height: "45px" }}
                                  />
                                </li>
                              </Box>
                              <Box>
                                <li className="z-depth-0">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/redux.png"
                                    alt="redux"
                                    style={{ height: "40px" }}
                                  />
                                </li>
                              </Box>
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/js.png"
                                    alt="js"
                                    style={{ height: "40px" }}
                                  />
                                </li>{" "}
                              </Box>
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/materialize.png"
                                    alt="materialize"
                                    style={{ width: "45px", margin: "5px" }}
                                  />
                                </li>{" "}
                              </Box>{" "}
                              <Box>
                                <li className="">
                                  <img
                                    className="skills-img"
                                    src="images/Skills/css.png"
                                    alt="css"
                                    style={{
                                      width: "70px",
                                      marginTop: "-10px"
                                    }}
                                  />
                                </li>{" "}
                              </Box>
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
