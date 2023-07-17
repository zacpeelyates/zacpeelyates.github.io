import React from "react";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <div className="div">
        <header className="header">
          <h1 className="header-text">
            <span className="text-wrapper">Hey, I’m</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-2">Zac</span>
            <span className="text-wrapper">. I make games. </span>
          </h1>
          <p className="body-text">
            <span className="text-wrapper-3">First-class</span>
            <span className="text-wrapper-4">
              {" "}
              graduate in Games Programming.
              <br />
            </span>
            <span className="text-wrapper-3">TIGA</span>
            <span className="text-wrapper-4"> Programming Graduate of the Year 2023.</span>
          </p>
        </header>
        <div className="profile">
          <div className="overlap">
            <div className="BG" />
            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
            <div className="pic" />
            <a href="mailto:zacpeelyates@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Button" src="/img/button-1.png" />
            </a>
            <a href="mailto:zacpeelyates@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Button" src="/img/button-2.png" />
            </a>
            <div className="divide" />
            <div className="icons">
              <a href="youtube.com/@zacpeel-yates7276" rel="noopener noreferrer" target="_blank">
                <img className="yt" alt="Yt" src="/img/yt.png" />
              </a>
              <a href="https://uk.linkedin.com/in/zac-peel-yates" rel="noopener noreferrer" target="_blank">
                <img className="lnk" alt="Lnk" src="/img/lnk.svg" />
              </a>
              <a href="github.com/zacpeelyates" rel="noopener noreferrer" target="_blank">
                <img className="git" alt="Git" src="/img/git.png" />
              </a>
              <a href="twitter.com/zacpeelyates" rel="noopener noreferrer" target="_blank">
                <img className="twt" alt="Twt" src="/img/twt.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="big-preview" />
          <div className="small-previews">
            <div className="small-preview" />
            <div className="small-preview-2" />
            <div className="small-preview-3" />
            <div className="small-preview-4" />
          </div>
          <div className="content-body">ProjectDescription</div>
          <div className="content-header">ProjectTitle</div>
        </div>
      </div>
    </div>
  );
};
