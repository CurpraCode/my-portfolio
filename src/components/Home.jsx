import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "../components/themes/Themes"
import About from "../components/pages/About";
import NavBar from "../components/pages/NavBar";
import Body from "../components/pages/Body";
import Project from "../components/pages/Project";
import Skill from "../components/pages/Skill";
import Contact from "../components/pages/Contact";
import Footer from "../components/pages/Footer";


function Home() {  
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <div>
      <NavBar />
      <Body />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    
    </div>
    </ThemeProvider>
  );
}
export default Home;
