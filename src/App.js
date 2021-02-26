import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";
import ScrollUp from "./ScrollUp";
import Preloader from "./Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 7000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Home />
          <ScrollUp />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
