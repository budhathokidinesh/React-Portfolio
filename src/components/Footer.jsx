import { useEffect, useState } from "react";

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
                <a href="#intro">Home</a>
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
            <h3>Social</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/dineshbudhathoki"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/budhathokidinesh" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto: physmarika@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved to Dinesh Budhathoki || 2025 🚀
        </div>
      </footer>
      {scrollYPosition > 800 && (
        <a href="#intro" className="goUp flex-center">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      )}
    </>
  );
};
