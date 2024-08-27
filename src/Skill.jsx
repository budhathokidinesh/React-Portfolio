import React from "react";
import { Title } from "./components/Title";
import { Layout } from "./components/Layout";

export const Skill = () => {
  return (
    <section className="skills" id="skills">
      <Title title="Skills" />
      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>
        <div>
          <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
          <span>Javascript</span>
        </div>
        <div>
          <i className="fa-brands fa-github" style={{ color: "black" }}></i>
          <span>Github</span>
        </div>
        <div>
          <i className="fa-brands fa-python" style={{ color: "orange" }}></i>
          <span>Python</span>
        </div>
      </div>
    </section>
  );
};
