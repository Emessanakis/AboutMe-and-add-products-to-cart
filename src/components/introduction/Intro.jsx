import React from "react";
import "./intro.css";
import Me from "../img/img-me.jpg";
import Techs from "../img/techs-img.png";
import Pica from "../img/splash.jpg";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <div className="headerz">
              <h2 className="i-intro">Hello, My name is </h2>
              <h1 className="i-name">Lefteris Messanakis</h1>
            </div>
            <div className="i-tittle">
              <h2 className="i-tech">Technologies :</h2>
              <div className="i-tittle-wrapper">
                <div className="i-tittle-item">HTML5</div>
                <div className="i-tittle-item">Css/Sass</div>
                <div className="i-tittle-item">Javascript</div>
                <div className="i-tittle-item">React.js</div>
              </div>
            </div>
            <div className="i-desc">
              <h2>Description.</h2>
              <p>
                I have a passion for web development, creating
                modern websites and web applications. This is a portfolio project
                that reviews a couple of Technologies I prefer working with.
              </p>
            </div>
            <img src={Techs} alt="" className="i-img-techs" />
          </div>
        </div>
        <div className="i-right">
          <img src={Pica} alt="" className="i-bg" />

          <div className="img-me">
            <img src={Me} alt="" className="i-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
