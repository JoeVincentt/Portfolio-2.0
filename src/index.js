import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
// import "./components/Projects/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { license } from "./keys";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Particles from "react-particles-js";
import ProjectOne from "./components/Projects/ProjectOne";
import ProjectTwo from "./components/Projects/ProjectTwo";
import ProjectThree from "./components/Projects/ProjectThree";
import ProjectFour from "./components/Projects/ProjectFour";
import ProjectFive from "./components/Projects/ProjectFive";
import ProjectSix from "./components/Projects/ProjectSix";
import ProjectSeven from "./components/Projects/ProjectSeven";
import MiniProjects from "./components/Projects/MiniProjects";

const anchors = ["Main", "Skills", "Projects", "About", "Contact"];

const Fullpage = () => (
  <React.Fragment>
    <Navbar />
    <Footer />
    {/* <Particles className="particles" /> */}
    <ReactFullpage
      licenseKey={license}
      navigation
      anchors={anchors}
      navigationTooltips={anchors}
      arrowNavigation
      loopTop
      loopBottom
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section container center">
              <Main />
            </div>
            <div className="section container center">
              <Skills />
            </div>
            <div className="section  center">
              <div className="slide ">
                <ProjectOne />
              </div>
              <div className="slide">
                <ProjectTwo />
              </div>
              <div className="slide">
                <ProjectThree />
              </div>
              <div className="slide">
                <ProjectFour />
              </div>
              <div className="slide">
                <ProjectFive />
              </div>
              <div className="slide">
                <ProjectSix />
              </div>
              <div className="slide active">
                <ProjectSeven />
              </div>
              <div className="slide">
                <MiniProjects />
              </div>
            </div>
            <div className="section container center">
              <About />
            </div>
            <div className="section container center">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </React.Fragment>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
