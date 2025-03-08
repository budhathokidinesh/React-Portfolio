import { useEffect, useState } from "react";
import "./Footer.css";

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
    <section>
      <div className="footer">
        <div className="top">
          <div className="cont">
            <h3>Links</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              <a href="#intro">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="socials">
            <h3>Social</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              <a
                href="https://www.linkedin.com/in/dineshbudhathoki"
                target="_blank"
              >
                Linkedin
              </a>
              <a href="https://github.com/budhathokidinesh" target="_blank">
                GitHub
              </a>
              <a href="mailto: physmarika@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved to Dinesh Budhathoki || 2025 🚀
        </div>
      </div>
      {scrollYPosition > 800 && (
        <a href="#intro" className=" flex-center goUp ">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      )}
    </section>
  );
};
