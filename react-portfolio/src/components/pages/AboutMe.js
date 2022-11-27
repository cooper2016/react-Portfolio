import React from "react";
import picOfMe from "../../images/pictureOfMe.png";
import "../../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div id="aboutMe">
      <img src={picOfMe} alt="Picutre of Me" />

      <h1>About me</h1>

      <p>
        I'm from Minneapolis, Minnesota. I went to college at Augsburg
        University, before starting my career in Finance. I'm a recent gradute
        of the University of Minnesota Coding Bootcamp and look forward
        furthering my knowledge of web development. On my page you will continue
        to find more information about me and some of the projects I've worked
        on.
      </p>
    </div>
  );
}
