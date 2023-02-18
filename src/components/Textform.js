import React,{useState} from 'react';
const Textform = (props) => {
  const handleUpClick = ()=>{
    // setText("you have clicked on handleclick");
    let newText =text.toLocaleUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    // setText("you have clicked on handleclick");
    let newText =text.toLocaleLowerCase();
    setText(newText);
  }
  const handleClearText = ()=>{
    // setText("you have clicked on handleclick");
    let newText ="";
    setText(newText);
  }
  const handleCopy =() =>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
 
  const handleChange = (event)=>{
    setText(event.target.value);
    // console.log(event.target);
    // setText("you have clicked on handleclick");
  }
  const [text, setText] = useState("Enter your text");
  return (
  <>
    <div className='container' style={{backgroundColor: props.bgColor,color:props.color}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" 
        style={{backgroundColor: props.bgColor,color:props.color}} 
        value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      
      <button className="btn mx-2 my-2" style={{backgroundColor:props.bgColor1,color:props.color1}} onClick={handleUpClick}>change to upperCase</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.bgColor1,color:props.color1}} onClick={handleLoClick}>change to lowerCase</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.bgColor1,color:props.color1}} onClick={handleClearText}>clear text</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.bgColor1,color:props.color1}} onClick={handleCopy}>Copy Text</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.bgColor1,color:props.color1}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.color}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} character and {text.split(".").length + text.split("?").length} sentences</p>
      <p>{0.008*(text.split(" ")) } minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  );
}

export default Textform;
