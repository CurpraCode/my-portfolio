import React, {useEffect} from "react";
import Home from "./components/Home"
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";

function App() {
useEffect(()=>{
  Aos.init({duration:2000})
}, [])
  return (
    <div className="App">
   <Home/>
    </div>
  );
}

export default App;
