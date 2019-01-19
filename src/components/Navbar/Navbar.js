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

const NavbarComponent = () => {
  return (
    <Header>
      <IconContext.Provider
        value={{
          color: "lightgray",
          size: "20px",
          margin: "2px",
          className: "global-class-name"
        }}
      >
        <nav className="transparent">
          <div className="nav-wrapper">
            <div className="brand-logo">
              <FaCodeBranch />
              <span style={{ marginLeft: "12px", fontSize: "22px" }}>
                Eugene Butenko
              </span>
            </div>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#Main">
                  <FaHome />
                </a>
              </li>
              <li>
                <a href="#Skills">
                  <FaGraduationCap />
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <FaDev />
                </a>
              </li>
              <li>
                <a href="#About">
                  <FaUser />
                </a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="#Contact">
                  <FaAddressCard />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
      {/*         
      <a href="#Main">Main</a>
      <a href="#Skills">Skills</a>
      <a href="#Projects">Projects</a>
      <a href="#About">About</a>
      <a href="#Contact">Contact</a> */}
    </Header>
  );
};

export default NavbarComponent;
