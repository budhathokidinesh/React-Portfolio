import React from "react";
import { Title } from "./Title";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Title title="Contact" />
      <div className="flex social">
        <a href="https://www.linkedin.com/in/dineshbudhathoki" target="_blank">
          <i className="fa-brands fa-linkedin" style={{ color: "#5320ea" }}></i>
        </a>
        <a href="https://github.com/budhathokidinesh" target="_blank">
          <i className="fa-brands fa-github" style={{ color: "#5320ea" }}></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube" style={{ color: "#5320ea" }}></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile" style={{ color: "#5320ea" }}></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="flex-center">
        <a
          href="mailto:physmarika@gmail.com"
          className="email-section flex-center"
        >
          <span>physmarika@gmail.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};
