import React from "react";
import { Slider, Slide } from "react-materialize";
import posed from "react-pose";

import { IconContext } from "react-icons";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 0.9
  },
  press: {
    scale: 1.1
  }
});

const MiniProjects = () => {
  return (
    <div className="container center-align">
      <IconContext.Provider
        value={{
          size: "30px",
          className: "global-class-name"
        }}
      >
        <div className="center-align center">
          <Slider>
            <Slide
              src="images/Projects/ProjectsPictures/"
              title="This is our big Tagline!"
            >
              <Box>Center Text</Box>
            </Slide>
            <Slide
              src="images/Projects/ProjectsPictures/"
              title="Left aligned Caption"
              placement="left"
            >
              <div className="left-align">Text on the left</div>
            </Slide>
            <Slide
              src="images/Projects/ProjectsPictures/"
              title="Right aligned Caption"
              placement="right"
            >
              Text on Right
            </Slide>
          </Slider>
          <h5 className="white-text">Check out code </h5>

          <a
            className="pulsate-fwd"
            href="https://github.com/JoeVincentt"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img
              src="images/Projects/github.png"
              alt="Github"
              style={{ width: "50px", cursor: "pointer" }}
              className="pulsate-fwd"
            />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default MiniProjects;
