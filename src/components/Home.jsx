import React from "react";
import styled from "styled-components";
import About from "../components/pages/About";
import NavBar from "../components/pages/NavBar";
import Body from "../components/pages/Body";
import Project from "../components/pages/Project";
import Skill from "../components/pages/Skill";
import Contact from "../components/pages/Contact";
import Footer from "../components/pages/Footer";


function Home() {  
 
  return (
   
    <BG>
      <NavBar />
      <Body />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    
    </BG>
   
  );
}
export default Home;

const BG = styled.div`
  background-color: rgb(244,246,246);
  `