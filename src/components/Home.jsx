import React from "react";
import About from "../components/pages/About";
import NavBar from "../components/pages/NavBar";
import Body from "../components/pages/Body";
import Project from "../components/pages/Project";
import Skill from "../components/pages/Skill";
import Contact from "../components/pages/Contact";
import Footer from "../components/pages/Footer";


function Home() {
  return (
    <div>
      <NavBar />
      <Body />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    
    </div>
  );
}
export default Home;
