import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: props.bgColor1, color: props.color1 }}>
        <div className="container-fluid" style={{ backgroundColor: props.bgColor1, color: props.color1 }}>
          <Link className="navbar-brand" to="/" style={{ backgroundColor: props.bgColor1, color: props.color1 }}>
            {props.title}
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{backgroundColor: props.bgColor1,color: props.color1}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/About" style={{backgroundColor: props.bgColor1,color: props.color1}}>
                  {props.aboutTitle}
                </Link>
              </li>
            </ul>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-light active">
                <input type="radio" name="options" id="option1" autocomplete="off" onClick={() => {
                    props.toggleMode("light");
                  }}
                />
                light Mode
              </label>
              <label className="btn btn-danger">
                <input type="radio" name="options" id="option2" autocomplete="off" onClick={() => {props.toggleMode("red");
                  }}
                />
                Red Mode
              </label>
              <label className="btn btn-success">
                <input type="radio" name="options" id="option3" autocomplete="off" onClick={() => {
                    props.toggleMode("green");
                  }}
                />
                Green Mode
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option4" autocomplete="off" onClick={() => {
                    props.toggleMode("dark");
                  }}
                />
                Blue Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
