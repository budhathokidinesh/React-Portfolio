import { Title } from "../Title";
import "./Skill.css";
import { DiMongodb } from "react-icons/di";
import express from "../../assets/img/express.png";
export const Skill = () => {
  return (
    <section className="s-skills">
      <div className="skills" id="skills">
        <Title title="Skills" />
        <div className=" flex skills-container">
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
            <i className="fa-brands fa-node-js" style={{ color: "orange" }}></i>
            <span>NodeJs</span>
          </div>
          <div>
            <img src={express} alt="" />
            <span>ExpressJS</span>
          </div>
          <div>
            <DiMongodb
              style={{ color: "green", height: "50px", width: "45px" }}
            />
            <span>MongoDB</span>
          </div>
          <div>
            <i className="fa-brands fa-python" style={{ color: "orange" }}></i>
            <span>Python</span>
          </div>
        </div>
      </div>
    </section>
  );
};
