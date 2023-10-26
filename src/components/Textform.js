import React, {useState} from 'react'

export default function Textform(props) {
    
    const upperCase = () =>
    {
         console.log("uppercase button was clicked");
         let newText = Text.toUpperCase();
         setText(newText);
         props.showAlert("Successfull converted to Uppercase" , "success");
    }
    const lowerCase = () =>
    {
      console.log("Lowercase button was clicked");
      let newText = Text.toLowerCase();
      setText(newText);
      props.showAlert("Successfull converted to lowercase" , "success");
    }
    const clearText = () =>
    {
      console.log("clear text");
      setText('');
      props.showAlert("Successfull text is being cleared" , "success");
    }
    
    const handleOnChange = (events) =>{
        console.log("On change")
        setText(events.target.value)
    }
    const copyText = ()=>{
      navigator.clipboard.writeText(Text);
      props.showAlert("Text has been copied successfully")
    }
    
    const [Text, setText] = useState('');
    //setText('New Text');
  return (
  <>
  <div className='container'>
     <h1>{props.heading}</h1>
      <div className="myBox my-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} placeholder='Enter the Text' value={Text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>  
    </div>
    <button disabled={Text.length===0} className="btn btn-dark mx-1 my-1" onClick={upperCase}>Convert to Uppercase</button>
    <button disabled={Text.length===0} className="btn btn-dark mx-1 my-1" onClick={lowerCase}>Convert to lowerCase</button>
    <button disabled={Text.length===0} className="btn btn-dark mx-1 my-1" onClick={clearText}>Clear Text</button>
    <button disabled={Text.length===0} className="btn btn-dark mx-1 my-1" onClick={copyText}>Copy Text</button>
    </div>
    <div className='container my-2' >
     <p>{Text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {Text.length} characters</p>
    </div>
  </>
  // \s is the regular expression for white space.
  
  )
}
// onchange function is used to change the state of the variable 
// it is compulsory is make 
// here we set the value of text area using function onChange ,
// which targets the value in the text area
//while when we click on uppercase the function setText change the text to the new text we passed.


