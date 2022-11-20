import React, { useState } from 'react';

import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode= () =>{
    if(mode==="light"){
      setMode("dark")
     
      document.body.style.backgroundColor="#042743";
    }
    else{
      document.body.style.backgroundColor="white";
      
      setMode("light")
    }
  }
  return (
  <>
    <Navbar title="Shaukat" aboutTitle="hello" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Textform heading="Enter your text here" mode={mode}/>
    </div>
    {/* <About/> */}
  </>
  );
}

export default App;
