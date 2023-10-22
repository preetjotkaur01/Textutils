import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// It is a component which is made by making a js file with capital
//  letter which can be imported in the app.js as a component
//  To include react function based component we write rfc
export default function Navbar(props) {
  return (
   
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        
      </ul>


      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}


        {/* <input type="checkbox" onClick={props.toggleModeb} className="btn-check" id="btn-check-outlined" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-outlined"></label><br/>

        <input type="checkbox" onClick={props.toggleMode} className="btn-check mx-1" id="btn-check-2-outlined" autocomplete="off"/>
        <label class="btn btn-outline-secondary" for="btn-check-2-outlined"></label><br/>

        <input type="checkbox" onClick={props.toggleModeg} className="btn-check mx-1" name="options-outlined" id="success-outlined" autocomplete="off"/>
        <label class="btn btn-outline-success" for="success-outlined"></label>

        <input type="checkbox" onClick={props.toggleModer} className="btn-check mx-1" name="options-outlined" id="danger-outlined" autocomplete="off"/>
        <label class="btn btn-outline-danger" for="danger-outlined"></label> */}

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enableMode}</label>
        </div>
    </div>
  </div>
</nav>
   
  )
}

Navbar.propTypes={
     title: PropTypes.string,
     about:PropTypes.string,
}