import React from "react";
import ps from "../assets/ps.png";
export const Card = ({ image, github, url, title, description }) => {
  return (
    <div className="project-card">
      <div className="top">
        <img src={image} alt="" width="100%" height="250px" />
      </div>
      <div className="bottom container">
        <div className="links">
          <a href={github} target="_blank">
            <i
              className="fa-brands fa-github"
              style={{
                color: "orange",
              }}
            ></i>
          </a>
          <a href={url} target="_blank">
            <i
              className="fa-brands fa-chrome"
              style={{
                color: "blue",
              }}
            ></i>
          </a>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
