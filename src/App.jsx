import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skill } from "./Skill";
import { Layout } from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="Skill" element={<Skill />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
