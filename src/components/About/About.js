import React, { Component } from "react";
import Tilt from "react-tilt";
import avatar from "./avatar.png";
import ReactRevealText from "react-reveal-text";
import {} from "react-icons/fa";
import { IconContext } from "react-icons";

class About extends Component {
  state = {
    show: false
  };
  onMouseEnter = () => {
    this.setState({ show: true });
  };
  onMouseLeave = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div
        className="container center-align white-text"
        style={{ overflow: "visible" }}
      >
        <div className="row">
          <div className="col s12 m12 l12">
            <div
              className="col m1 l1 hide-on-small-only "
              style={{
                overflow: "visible",
                marginTop: "60px",
                fontStyle: "italic",
                color: "grey"
              }}
            >
              <h4>A</h4>
              <h4>B</h4>
              <h4>O</h4>
              <h4>U</h4>
              <h4>T</h4>
            </div>
            <div className="col s12 m11 l11">
              <div className="row center">
                <div className="col s10 m6 offset-m3 offset-s1 center ">
                  <div className="container">
                    <IconContext.Provider
                      value={{
                        size: "20%",
                        className: "global-class-name"
                      }}
                    >
                      <Tilt
                        className="Tilt"
                        options={{ max: 25 }}
                        style={{ height: 200, width: "auto" }}
                      >
                        <div className="Tilt-inner">
                          {" "}
                          <div className="card-content">
                            <p>
                              Since first time typed in "Hello World" in Python,
                              while taking very first course in programming
                              "Python: for absolute beginners", I fell in love
                              with programming. Very passionate about technology
                              and everything about it.
                            </p>
                          </div>
                        </div>
                      </Tilt>
                    </IconContext.Provider>
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

export default About;
