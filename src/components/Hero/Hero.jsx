import db from "../../assets/db.png";
import "./Hero.css";
import Github from "../../assets/img/github.png";
import Linkedin from "../../assets/img/linkedin.png";
import Insta from "../../assets/img/instagram.png";

export const Hero = () => {
  return (
    <div className=" container intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I am </span>
          <span>Dinesh Budhathoki</span>
          <span>
            Full Stack Engineer who builds high-performance, responsive and
            secured web applications with a focus on clean, maintainable code
            and seamless user experiences.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/budhathokidinesh" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dineshbudhathoki"
            target="_blank"
          >
            <img src={Linkedin} alt="" />
          </a>
          <img src={Insta} alt="" />
        </div>
      </div>
      {/* Right side  */}
      <div className="i-right">
        <img src={db} alt="" />
      </div>
    </div>
  );
};
