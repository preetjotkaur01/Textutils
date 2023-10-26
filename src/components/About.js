

export default function About(props) {

    // const[myStyle , setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',   
    //  })

    //  const[myText,setText] = useState("Enable Darkmode");

    let myStyle ={
       
        color:props.mode==='dark'?'white':'grey',
        backgroundColor:props.mode ==='dark'?'grey':'white',
     
    }



  return (
   
    <div className='container ' style={myStyle }>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample" style={{myStyle ,  border:'solid 2px', borderColor:props.mode==='dark'?'white':'grey'}}>
           <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           AnaLyze Your Text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
        </div>
        </div>
           </div>
           <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to use 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
           </div>
           <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible 
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           This word counter software works in any web browsers such as chrome , firefox, internet explorer, safari , opera. Itsuits to count character in facebook , blog , books, excel documents , pdf document, essays etc. 
        </div>
        </div>
           </div>
        </div>
        
        
    </div>

    
  )
}
