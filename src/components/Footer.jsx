import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleOnScrollY = () => {
    console.log(window.scrollY);
    setScrollYPosition(window.scrollY);
  };
  useEffect(() => {
    // end of the render, run following code
    window.addEventListener("scroll", handleOnScrollY);
    // clean up the events

    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);
  return (
    <>
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social LInks</h3>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved 2024 || Made by me with 🚀
        </div>
      </footer>
      {scrollYPosition > 800 && (
        <a href="#hero" className="goUp flex-center">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      )}
    </>
  );
};
