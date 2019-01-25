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
                  <IconContext.Provider
                    value={{
                      size: "20%",
                      className: "global-class-name"
                    }}
                  >
                    <Tilt
                      className="Tilt"
                      options={{ max: 25 }}
                      style={{ height: 450, width: "auto" }}
                    >
                      <div className="Tilt-inner">
                        {" "}
                        <div
                          className="card  transparent white-text center z-depth-0"
                          onMouseEnter={this.onMouseEnter}
                          onMouseLeave={this.onMouseLeave}
                        >
                          <div className="card-image">
                            {" "}
                            <img
                              src={avatar}
                              alt="avatar"
                              style={{ width: "100%" }}
                            />{" "}
                          </div>
                        </div>
                        <div className="card-stacked">
                          <div className="card-content">
                            <span>
                              <ReactRevealText
                                threshold={0.4}
                                show={this.state.show}
                              >
                                Since first time typed in "Hello World" in
                                Python, while taking very first course in
                                programming "Python: for absolute beginners", I
                                fell in love with programming. It was a quite
                                long way till I got to Web Development, i
                                certainly knew I love doing this, but so many
                                ways to use programming... Learned very basics
                                of few languages and decided to stay in Web Dev.
                                Something what we use everyday and something
                                people can see and appreciate if its done right!
                              </ReactRevealText>
                            </span>
                          </div>
                          <div className="card-action" />
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
    );
  }
}

export default About;
