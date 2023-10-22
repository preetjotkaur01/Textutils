
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
 

  const[enableMode,setEnableMode] = useState('Enable Darkmode');
  const[alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
     setAlert(
      {
        msg:message,
        type:type
      }
     )
     setTimeout(()=>{
       setAlert(null);
     },3000);
  };
  

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      setEnableMode('Disable Darkmode');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been succesfully enabled" , "success");
    }
    else{
      setMode('light');
      setEnableMode('Enable Darkmode');
      
      showAlert("Light Mode has been succesfully enabled" , "success");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
     <BrowserRouter>
    <Navbar title="TextUtils" about="About" mode = {mode} toggleMode={toggleMode} enableMode={enableMode}/>  
    <Alert alert={alert}/>

    <div className='container'>
    <Routes>
          <Route path="/about"
            element ={<About/>} >
          </Route>
          <Route path="/"
           element = {<Textform heading="Enter Your Text" mode={mode} showAlert={showAlert}/>} >
          </Route>
      </Routes>
        
    </div> 
    </BrowserRouter>
    </>


  );
}

export default App;
