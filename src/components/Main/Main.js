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
          <div className="col s9 m6 offset-m3 pull-s1">
            <div className="card transparent z-depth-0">
              <div className="card-content white-text">
                <Typist
                  avgTypingDelay={60}
                  startDelay={2000}
                  onTypingDone={this.onHeaderTyped}
                  cursor={{ show: false }}
                >
                  <h4
                    className="center-align"
                    style={{ fontFamily: "Indie+Flower" }}
                  >
                    Welcome!
                  </h4>{" "}
                  <Typist.Delay ms={500} />
                  <h5 className="center">My name is Eugene</h5>
                  <Typist.Delay ms={500} />
                  <h5 className="center">and I am </h5>
                  <Typist.Delay ms={500} />
                  <h5 className="center">A Fullstack Web Developer</h5>
                  <Typist.Delay ms={500} />
                  <br />
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
