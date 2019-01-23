import React, { Component } from "react";
import Typist from "react-typist";
import { FaArrowDown } from "react-icons/fa";
import "./Main.css";

class Main extends Component {
  state = {
    renderMsg: false
  };

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  };

  render() {
    return (
      <div className="container center" id="mainpage">
        <div className="row">
          <div className="col s7 m6 offset-m3">
            <div className="card transparent z-depth-0">
              <div className="card-content white-text">
                <Typist
                  className=""
                  avgTypingSpeed={40}
                  startDelay={2000}
                  onTypingDone={this.onHeaderTyped}
                  cursor={{ show: false }}
                >
                  <h2 className="center">Welcome</h2> <Typist.Delay ms={500} />
                  <Typist.Backspace count={8} delay={700} />
                  <h5 className="center">My name is Eugene</h5>
                  <Typist.Delay ms={1250} />
                  <h5 className="center">and I am Fullstack Web Developer</h5>
                  <Typist.Delay ms={1250} />
                  <br />
                  <Typist.Backspace count={60} delay={1000} />
                  <br />
                  <h5 className="center">See more...</h5>
                  <Typist.Delay ms={100} />
                  <h2 className="center pulsate-fwd">
                    <a href="#Skills" className="pulsate-fwd">
                      <FaArrowDown className="pulsate-fwd" />
                    </a>
                  </h2>
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
