import React, { Component } from "react";
import "./Skills.css";
import posed from "react-pose";

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

class Skills extends Component {
  render() {
    return (
      <div className="container center white-text " id="skills-box">
        <div className="row center">
          <div className="col m12 s10">
            <div className="card transparent z-depth-0">
              <div className="container">
                <div className="card-content skills-desc">
                  <p>
                    Showing your passion for technology if you DON’T have a tech
                    background You might think that if you don’t have a
                    technology-related degree, don’t have the latest smartphone
                  </p>
                </div>
              </div>
              <div className="card-tabs center z-depth-0">
                <div className="container">
                  <ul
                    className="tabs tabs-fixed-width transparent z-depth-0"
                    style={{ overflow: "visible" }}
                  >
                    <Box>
                      <li className="tab z-depth-0" style={{ zIndex: "2000" }}>
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
                      <li className="tab">
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
                      <li className="tab">
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
                      <li className="tab">
                        <a href="#GraphQL">
                          <img
                            className="skills-img"
                            src="images/Skills/graphql.png"
                            alt="GraphQL"
                            style={{ height: "40px" }}
                          />
                        </a>
                      </li>{" "}
                    </Box>
                  </ul>
                </div>
              </div>
              <div className="card-content transparent lighten-4">
                <div className="container center skills-desc">
                  <div id="ReactJS">React</div>
                  <div id="GraphQL">GraphQL</div>
                  <div id="MongoDB">MongoDB</div>
                  <div id="NodeJS">NodeJS</div>
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
