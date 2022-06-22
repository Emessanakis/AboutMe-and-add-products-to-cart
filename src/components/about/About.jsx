import React from "react";
import "./about.css";
import Codin from "../img/intro-pic.jpg";
import Pica from "../img/splash.jpg";

function About() {
  return (
    <React.Fragment>
      <div className="a">
        <div className="a-left">
          <img src={Pica} alt="" className="a-card bg" />
          <div className="a-card">
            <img src={Codin} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <div className="a-right-card">
            <h1 className="a-title">Here is a couple of things about me</h1>
            <p className="a-sub">
              I have experience in object oriented Programming langueges as
              Java but i prefer to use Javascript and couple other libraries as
              React.js for functionality. I have previus experience with
              databases because I worked with them back in college(MySql and MongoDB).
              I have also worked with Api's in a couple of projects.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
