import React from "react";
import "./Footer.css";
import { Footer } from "react-fullpage";
import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const FooterComponent = () => {
  return (
    <Footer>
      <IconContext.Provider
        value={{
          color: "lightgray",
          size: "40px",
          className: "global-class-name"
        }}
      >
        <footer className="page-footer transparent">
          <div className="footer-copyright">
            <div className="container" />
            <Box>
              {" "}
              <a
                href="https://www.linkedin.com/in/yevhenii-butenko/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ margin: "10px" }}
              >
                {" "}
                <FaLinkedinIn className="linkedIn" />
              </a>
            </Box>
            <Box>
              <a
                href="https://github.com/JoeVincentt"
                rel="noopener noreferrer"
                target="_blank"
                style={{ marginRight: "20px" }}
              >
                <FaGithub className="gitHub" />
              </a>
            </Box>
          </div>
        </footer>
      </IconContext.Provider>
    </Footer>
  );
};

export default FooterComponent;
