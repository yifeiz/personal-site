import React, { useState } from "react";

import profile from "./imgs/headshot.jpg";
import background from "./imgs/background.jpg";

import "./styles/App.scss";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="root">
        <img
          src={background}
          style={{ display: "none" }}
          onLoad={() => setLoaded(true)}
          alt="temp-background"
        />
        BLAH
      </div>
    );
  }
  return (
    <div className="root">
      <div className="main-card">
        <img className="profile-img" src={profile} alt="profile" />
        <div className="card-text">
          Hey there! My name is Yifei Zhang, and I'm entering my 3rd year of
          Software Engineering at the University of Waterloo. Feel free to
          connect with me using any of the links below!
        </div>
      </div>
      <div className="footer">
        <a
          href="https://github.com/yifeiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yifei-zhang1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a
          href="mailto:yifei.zhang@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="far fa-envelope fa-2x"></i>
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default App;
