import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch
  ,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About"; 

function App() {
  
  const [color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const [color1, setColor1] = useState("white");
  const [bgColor1, setBgColor1] = useState("#636363");
  const toggleMode= (getData) =>{
    if(getData==="dark"){
      setBgColor1("#3434f8")
      setColor1("white")
      setBgColor("#042743")
      setColor("white")
      document.body.style.backgroundColor="#042743";
    }
    else if(getData==="light"){
      document.body.style.backgroundColor="#f3f3f3";
      setBgColor1("#636363")
      setColor1("white")
      setBgColor("white")
      setColor("black")
    }
    else if(getData==="green"){
      document.body.style.backgroundColor="#335a33";
      setBgColor1("#439c43")
      setColor1("white")
       setBgColor("#335a33")
       setColor("white")
    }
    else if(getData==="red"){
      document.body.style.backgroundColor="#e75151";
      setBgColor1("#f86666")
      setColor1("white")
       setBgColor("#e75151")
       setColor("white")
    }
  }

  return (
  <>
    <Router>
      <Navbar title="Shaukat" aboutTitle="About"  bgColor1={bgColor1} color1={color1} toggleMode={toggleMode} />
        <Switch>
          <Route path="/">
           <div className="container my-3">
            <Textform heading="Enter your text here" bgColor={bgColor} color={color} bgColor1={bgColor1} color1={color1}/>
           </div>
          </Route>
          <Route path="/About">
            <About />
          </Route> 
        </Switch>
    </Router>
  
  </>
  );
}

export default App;
