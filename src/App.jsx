import "./App.css";
import { About } from "./components/AboutMe/About.jsx";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer/Footer.jsx";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skill } from "./components/Skills/Skill";
function App() {
  return (
    <>
      {/* <!-- dark mode toggler --> */}
      <label htmlFor="darkmode">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* <!-- nav bar --> */}
        <Navbar />

        {/* <!-- hero section  --> */}
        <Hero />

        {/* <!-- skills section  --> */}
        <Skill />
        {/* <!-- projects section --> */}
        <Projects />

        {/* <!-- about section --> */}
        <About />

        {/* <!-- contact section  --> */}
        <Contact />

        {/* <!-- footer section  --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
