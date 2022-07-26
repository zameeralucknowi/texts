import React, {useState} from 'react'



export default function Textform(props) {
  const [text, settext] = useState("");


  const handleupcase = () => {
    // console.log("uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to Uppercase","success")

  }

  const handlelocase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converted Lowercase","success")

  }

  const handleclear = () => {
    let newtext = '';
    settext(newtext);
    props.showAlert("Text cleared","success")

  }

  const handlecopy = () =>{
    let newtext = document.getElementById('box');
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text copied","success")
  }

  const handlespace = () =>{
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("extra spaces removed","success")
  }


  const handleonchange = (event) => {
    // console.log("onchange is also clicked")
    settext(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <div className="mb-3">
        <h1>{props.heading} - </h1>

        <textarea className="form-control" value={text} onChange={handleonchange} style ={{backgroundColor :props.mode==='dark'?'#12182c':'white', color:props.mode==='dark'?'white':'black'}}id="box" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleupcase}>convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handlelocase}>convert to lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleclear}>clear text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handlecopy}>copy text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handlespace}>remove extra spaces</button>

      </div>



      <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:'enter something above to preview it here'}</p>
      </div>

    </>





  )
}
