import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import { license } from "./keys";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Particles from "react-particles-js";
import ProjectOne from "./components/Projects/ProjectOne/ProjectOne";
import ProjectTwo from "./components/Projects/ProjectTwo/ProjectTwo";
import ProjectThree from "./components/Projects/ProjectThree/ProjectThree";
import MiniProjects from "./components/Projects/MiniProjects/MiniProjects";

const anchors = ["Main", "Skills", "Projects", "About", "Contact"];

const Fullpage = () => (
  <React.Fragment>
    <Navbar />
    <Footer />
    <Particles className="particles" />
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
            <div className="section" id="mainsection">
              <Main />
            </div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <div className="slide active">
                <ProjectOne />
              </div>
              <div className="slide">
                <ProjectTwo />
              </div>
              <div className="slide">
                <ProjectThree />
              </div>
              <div className="slide">
                <MiniProjects />
              </div>
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </React.Fragment>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
/* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";

// // import "./styles.css";

// class MySection extends React.Component {
//   render() {
//     return (
//       <div className="section">
//         <h3>{this.props.content}</h3>
//       </div>
//     );
//   }
// }

// const anchors = ["firstPage", "secondPage", "thirdPage"];

// const FullpageWrapper = () => (
//   <ReactFullpage
//     anchors={anchors}
//     navigation
//     arrowNavigation
//     navigationTooltips={anchors}
//     sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
//     onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

//       return (
//         <div>
//           <MySection content={"Slide down!"} />
//           <MySection content={"Keep going!"} />
//           <MySection content={"Slide up!"} />
//         </div>
//       );
//     }}
//   />
// );
// ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "../src/App";
// import "./index.css";

// import { SectionsContainer, Section, Header, Footer } from "react-fullpage";

// const app = document.querySelector("#root");

// class Example extends React.Component {
//   render() {
//     let options = {
//       sectionClassName: "section",
//       anchors: ["sectionOne", "sectionTwo", "sectionThree"],
//       scrollBar: false,
//       navigation: true,
//       verticalAlign: false,
//       sectionPaddingTop: "50px",
//       sectionPaddingBottom: "50px",
//       arrowNavigation: true
//     };

//     return (
//       <div>
//         <Header>
//           <a href="#sectionOne">Section One</a>
//           <a href="#sectionTwo">Section Two</a>
//           <a href="#sectionThree">Section Three</a>
//         </Header>
//         <Footer>
//           <a href="">Dcoumentation</a>
//           <a href="">Example Source</a>
//           <a href="">About</a>
//         </Footer>
//         <SectionsContainer className="container" {...options}>
//           <Section
//             className="custom-section"
//             verticalAlign="true"
//             color="#69D2E7"
//           >
//             <App />
//           </Section>
//           <Section color="#A7DBD8">Page 2</Section>
//           <Section color="#E0E4CC">Page 3</Section>
//         </SectionsContainer>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Example />, app);
