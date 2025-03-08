import { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className=" h-wrapper">
      <div className="header">
        {/* Left side  */}
        <div className=" flex logo">
          <div>Dinesh</div>

          <div>Full Stack Developer</div>
        </div>

        <div className=" flex links" style={getMenuStyle(menuOpen)}>
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#projects">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <IoMenu />
        </div>
      </div>
    </section>
  );
};
