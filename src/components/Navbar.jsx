import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Dinesh</div>
          <div className="line"></div>
          <div>Soft. Engineer</div>
        </div>
        <label htmlFor="hamburger" onClick={() => setSlideMenu(!slideMenu)}>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburger" />
        <div className={slideMenu ? "menu slide" : "menu"}>
          <ul
            className="flex navigation"
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skill">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
