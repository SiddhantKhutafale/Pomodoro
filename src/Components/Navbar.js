import React from 'react'
import logo from "../assets/logo.png"
import "../Components/Navbar.css"

function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="img-container" href="#">
    <img className='img-logo' src={logo} alt='pomodoro-img'/>
    Pomofocus
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3 " id='nav-click'>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="#">Report</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">Login</a>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
    
    
  
 
  )
}

export default Navbar
