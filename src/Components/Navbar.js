import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

 


  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" >Project0ne</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/posts"} className="nav-link active">Posts</Link>
            </li>
            <li className="nav-item">
              <Link to={"/users"} className="nav-link active">Users</Link>
            </li>
            <li className="nav-item">
              <Link to={"/crud"} className="nav-link active">CRUD-Axios</Link>
            </li>
          </ul>
        </div>
      
      </div>
     
    </nav>

  )
}

export default Navbar
