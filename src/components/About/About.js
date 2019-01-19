import React from "react";
import Tilt from "react-tilt";
import avatar from "./avatar.png";

const About = () => {
  return (
    <div className="container">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img src={avatar} alt="avatar" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default About;
