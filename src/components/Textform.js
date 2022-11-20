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
  // function toSentenceCase(para) {
  //   let newText;
  //   for (let index = 0; index < para.length; index++) {
  //     newText[index]=para[index].toLocaleUpperCase;
  //   }
  //   return (newText);
  // }
  // const sentenceCase = ()=>{
  //   let text1=text.slice(".");
  //   let text3=text1[2];
  //   let text2=text3.charAt(0).toLocaleUpperCase() + text3.slice(1);
  //   setText(text2);
  // }
  const handleChange = (event)=>{
    setText(event.target.value);
    // setText("you have clicked on handleclick");
  }
  const [text, setText] = useState("Enter your text");
  
  return (
  <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#042743':'white',
  color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white',
  color:props.mode==='light'?'black':'white'}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>change to upperCase</button>
      <button className="btn btn-primary mx-2"  onClick={handleLoClick}>change to lowerCase</button>
      <button className="btn btn-primary mx-2"  onClick={handleClearText}>clear text</button>
      {/* <button className="btn btn-primary mx-2"  onClick={sentenceCase}>sentence case</button> */}
      <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words , {text.length} character and {text.split(".").length + text.split("?").length} sentences</p>
      <p>{0.008*(text.split(" ").length)} minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  );
}

export default Textform;
