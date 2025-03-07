import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <header>
      <div className="header container flex">
        {/* Left side  */}
        <div className="logo flex">
          <div>Dinesh</div>

          <div>Full Stack Developer</div>
        </div>
        <label htmlFor="hamburger" onClick={() => setSlideMenu(!slideMenu)}>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburger" />
        {/* Right side  */}
        <div className={slideMenu ? "menu slide" : "menu"}>
          <ul
            className="flex navigation"
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#projects">Education</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <button className="button ">
              <a href="#contact">Contact</a>
            </button>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};
