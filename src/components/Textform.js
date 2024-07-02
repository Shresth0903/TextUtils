import React, {useState} from 'react'

export default function Textform(props) {
  const handleupClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper caase", "succes")
  }

  const handlelowClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to lower caase", "succes")
  }

  const handleOnChange = (event) =>{
    console.log("Handle on change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to upper case</button>
    <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to lower case</button>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

