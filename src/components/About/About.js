import React, { Component } from "react";
import Tilt from "react-tilt";
import avatar from "./avatar.png";
import ReactRevealText from "react-reveal-text";

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
      <div className="container center white-text">
        <div className="row">
          <div className="col s7 m6 offset-m3 offset-s2 center">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 550, width: "auto" }}
            >
              <div className="Tilt-inner">
                {" "}
                <div
                  className="card  transparent white-text center"
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <div className="card-image">
                    <img src={avatar} alt="avatar" />{" "}
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
                        containing small bits of information.I am a very simple
                        card. I am good at containing small bits of information.
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
    );
  }
}

export default About;
