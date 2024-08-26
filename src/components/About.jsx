import React from "react";
import db from "../assets/db.png";
import { Title } from "./Title";
export const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About Me" />
      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img src={db} alt="Dinesh's Img" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Dinesh Budhathoki</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut
            similique fuga, tenetur exercitationem quidem. Vitae obcaecati
            repellat at eveniet nisi, tenetur minus itaque reprehenderit eius
            est dolorem deleniti voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illo, quidem voluptatum est quod
            eveniet soluta voluptas hic cumque odio ab doloremque nemo autem
            laudantium distinctio mollitia reiciendis quia consequatur ipsa!
          </p>
          <p>Perth, Australia</p>
          <div>
            <div className="tag">Interests</div>
            <div className="flex">
              <span>coding</span>
              <span>History</span>
              <span>Travelling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
