import React from "react";
import ps from "../assets/img/portfolio.png";
import RealEstate from "../assets/img/RealEstate.png";
import TimeManagement from "../assets/img/TimeManagement.png";
import Movie from "../assets/img/Movie World.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const myProjects = [
    {
      image: ps,
      github: "https://github.com",
      url: "https://www.dineshbudhathoki.com",
      title: "My Portfolio Website",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: RealEstate,
      github: "https://github.com",
      url: "https://real-estate-front-ruby.vercel.app",
      title: "FullStack RealEstate Website",
      description:
        "Techstack: HTML, CSS, Javascript, React, NodeJs, ExpressJs, MongoDb, GitHub, Vercel",
    },
    {
      image: TimeManagement,
      github: "https://github.com",
      url: "https://https://react-time-management-tawny.vercel.app/",
      title: "Time Management Website",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: Movie,
      github: "https://github.com",
      url: "https://http://movie-world-omega.vercel.app/",
      title: "Movie World Website",
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
