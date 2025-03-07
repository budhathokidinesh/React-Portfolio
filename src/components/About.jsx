import React from "react";
import db from "../assets/db.png";
import { Title } from "./Title";
export const About = () => {
  return (
    <section className=" container about" id="about">
      <Title title="About Me" />
      <div className=" flex about-content">
        <div className="my-bio container">
          <h2>Dinesh Budhathoki</h2>
          <p style={{ textAlign: "justify" }}>
            As a FullStack Developer, I develop and maintain MERN FullStack web
            applications, ensuring high performance, responsive and secure
            applications. I write clean, efficient, secured and well
            maintainable code using HTML, CSS, JavaScript, TypeScript, NodeJs,
            ExpressJs and MogoDb and optimize applications for maximum speed,
            and scalability.
            <br /> <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a
            Master's degree in Information Technology Systems from Victorian
            Institute of Technology with grade A. I have experience in working
            with front-end and back-end technologies, such as React, Redux,
            Node, Express and MongoDb. I have also worked on projects using
            CI/CD and cloud services. I am hardworking, focused, optimistic and
            friendly person who works well with others and takes pride in
            delivering high-quality solution and meet client requirements and
            user needs.
          </p>
          <p>Perth,&nbsp; Australia</p>
          <div>
            <div className="tag">Interests</div>
            <div className="flex">
              <span>Coding</span>
              <span>Reading</span>
              <span>Travelling</span>
              <span>Fitness</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
