import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";
import ScrollUp from "./ScrollUp";
import Preloader from "./Preloader";
import styled, {ThemeProvider} from "styled-components";
import {themes} from "./themes/theme";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme]= useState("light");
  useEffect(() => {
    setTimeout(() => setLoading(false), 7000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {loading === false ? (
        <ThemeProvider theme={themes[theme]}>
        <Apps>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home theme={theme} setTheme={setTheme} />
                <ScrollUp />
              </Route>
            </Switch>
          </Router>
        </Apps>
        </ThemeProvider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;

const Apps=styled.div`
background-color:${props=>props.theme.pageBackground};
`