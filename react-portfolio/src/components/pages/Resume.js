import React from "react";
import MyResume from "../../files/Resume.png";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div>
      <div>
        <h1>Proficiencies: </h1>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>React.js</li>
          <li>noSQL</li>
        </ul>
      </div>
      <div id="download">
        <h1>Download my resume below: </h1>
        <a href={MyResume} download="Resume" target="_blank" rel="noreferrer">
          <button>Harrison Cooper Resume</button>
        </a>
      </div>
    </div>
  );
}
