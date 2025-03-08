import { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: menuOpen ? "0" : "-100%" };
    }
    return {};
  };
  return (
    <section className=" h-wrapper">
      <div className="header">
        {/* Left side  */}
        <div className=" flex logo">
          <div>Dinesh</div>

          <div>Full Stack Developer</div>
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div
            className="flex links"
            style={getMenuStyle(menuOpen)}
            id="menu-links"
          >
            <a href="#intro" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Education
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </OutsideClickHandler>
        {/* Menu icon */}
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <IoMenu />
        </div>
      </div>
    </section>
  );
};
