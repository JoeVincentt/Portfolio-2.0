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
      <IconContext.Provider
        value={{
          size: "30px",
          className: "global-class-name"
        }}
      >
        <div className="container center white-text">
          <div className="row">
            <div className="col s7 m6 offset-m3 offset-s2 center">
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
                        <ReactRevealText threshold={0.4} show={this.state.show}>
                          I am a very simple card. I am good at containing small
                          bits of information.I am a very simple card. I am good
                          at containing small bits of information.I am a very
                          simple card. I am good at containing small bits of
                          information.I am a very simple card. I am good at
                          containing small bits of information.I am a very
                          simple card. I am good at containing small bits of
                          information.
                        </ReactRevealText>
                      </span>
                    </div>
                    <div className="card-action" />
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
}

export default About;
