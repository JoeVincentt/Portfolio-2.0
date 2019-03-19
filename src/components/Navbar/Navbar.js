import React from "react";
import { Header } from "react-fullpage";
import {
  FaHome,
  FaDev,
  FaGraduationCap,
  FaUser,
  FaAddressCard,
  FaCodeBranch
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Navbar.css";
import posed from "react-pose";
import SplitText from "react-pose-text";

const wordPoses = {
  draggable: true
};

const charPoses = {
  drag: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 1000
    }
  }
};

const Box = posed.a({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.3,
    boxShadow: "0px 3px 7px rgba(0,0,0,0.5)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.4)"
  }
});

const NavbarComponent = () => (
  <Header>
    <IconContext.Provider
      value={{
        color: "lightgray",
        size: "20px",
        margin: "2px",
        className: "global-class-name"
      }}
    >
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper">
          <div className="brand-logo hide-on-med-and-down">
            <FaCodeBranch />
            <span style={{ marginLeft: "12px", fontSize: "22px" }}>
              <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                Eugene Butenko
              </SplitText>
            </span>
          </div>
          <div className="row">
            <div className="col s12 l12 m12 pull-s1">
              <ul className="right  z-depth-0">
                <li>
                  <Box href="/#Main" className="atag">
                    <FaHome className="icon-button" />
                  </Box>
                </li>
                <li>
                  <Box href="/#Skills">
                    <FaGraduationCap className="icon-button" />
                  </Box>
                </li>
                <li>
                  <Box href="#Projects">
                    <FaDev className="icon-button" />
                  </Box>
                </li>
                {/* <li>
                  <Box href="#About">
                    <FaUser className="icon-button" />
                  </Box>
                </li> */}
                <li style={{ marginRight: "20px" }}>
                  <Box href="#Contact">
                    <FaAddressCard className="icon-button" />
                  </Box>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  </Header>
);

export default NavbarComponent;
