import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skill } from "./Skill";
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
