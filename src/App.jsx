import React from "react";

import profile from "./imgs/favicon.jpg";

import "./styles/App.scss";

const App = () => {
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
        <a href="https://github.com/yifei7zhang" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/yifei-zhang1/" target="_blank">
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="mailto:yifei.zhang@uwaterloo.ca" target="_blank">
          <i class="far fa-envelope fa-2x"></i>
        </a>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default App;
