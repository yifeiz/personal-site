import React from "react";
import profile from "./favicon.jpg";

import "./App.css";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="main-card">
        <img className="profile-img" src={profile} alt="profile" />
        <div style={{ color: "white" }}>
          hey there! lorem ipsum, blah blah a;sdlfkjasd;flkjasd;flkajds;flkajs
        </div>
      </div>
    </div>
  );
};

export default App;
