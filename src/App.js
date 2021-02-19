import React, {useEffect} from "react";
import Home from "./components/Home"
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";
import ScrollUp from "./ScrollUp"

function App() {
useEffect(()=>{
  Aos.init({duration:2000})
}, [])
  return (
    <div className="App">
   <Home/>
   <ScrollUp/>
    </div>
  );
}

export default App;
