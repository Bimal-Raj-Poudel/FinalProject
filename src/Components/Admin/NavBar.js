import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid flex-container">

    <div className="navbar-brand flex-box1">
        <Link className="nav-link" to="">DashhBoard</Link>
        </div>
    

    <div className="collapse navbar-collapse flex-box2" >
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link className="nav-link" to="/admin/user">User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/admin/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/category">Category</Link>
        </li>
      </ul> 
    </div>
    
    <div className="flex-box3">
        <input type="text" class="form-control" aria-label="Text input with checkbox" />
        </div>
  </div>
</nav>
    </div>
  )
}
