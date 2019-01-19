import React, { Component } from "react";
import Typist from "react-typist";

class Main extends Component {
  state = {
    renderMsg: false
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s7 m6 offset-m3">
            <div className="card transparent darken-1">
              <div className="card-content white-text">
                <Typist
                  className=""
                  avgTypingSpeed={40}
                  startDelay={2000}
                  onTypingDone={this.onHeaderTyped}
                  cursor={{ show: false }}
                >
                  <h2 className="center">Hey, Eugene is Here!</h2>
                  <h5 className="center">Thank You For Visiting!</h5>
                  <Typist.Delay ms={1250} />
                  <br />
                  <Typist.Backspace count={60} delay={1000} />
                  <br />{" "}
                  <h5 className="center">Please scroll down to see more!</h5>
                  <Typist.Delay ms={100} />
                </Typist>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Main;
