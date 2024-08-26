import React from "react";
import ps from "../assets/ps.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const myProjects = [
    {
      image: ps,
      github: "https://github.com",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: ps,
      github: "https://github.com",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: ps,
      github: "https://github.com",
      url: "",
      title: " P1 My Portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: ps,
      github: "https://github.com",
      url: "",
      title: " P2My Portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
  ];
  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />
      <div className="grid project-container">
        {myProjects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
