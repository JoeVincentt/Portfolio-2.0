import React from "react";
import Tilt from "react-tilt";
import contact from "../../contact.png";
import { FaAt } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="container center white-text ">
        <div className="row">
          <div className="col s7 m6 offset-m3 offset-s3 center">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 550, width: "auto" }}
            >
              <div className="Tilt-inner">
                {" "}
                <div className="card  transparent white-text center z-depth-0">
                  <div className="card-image">
                    <img src={contact} alt="avatar" style={{ width: "100%" }} />{" "}
                  </div>
                </div>
                <div className="card-stacked">
                  <div className="card-content center">
                    <h5>Contact Me</h5>
                    <div style={{ fontSize: "20px" }}>
                      <address>
                        Eugene Butenko
                        <br />
                        <a href='mailto:eugene.bb@hotmail.com?body="Yourbody"&subject="a subject".com'>
                          eugene.bb <FaAt /> hotmail.com
                          <br />
                        </a>
                        Bethany Beach, Delaware
                        <br />
                        USA
                      </address>
                    </div>
                  </div>
                  <div className="card-action" />
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
