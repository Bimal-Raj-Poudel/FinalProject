import React from 'react'
import { Link } from 'react-router-dom'


export default function SideBar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
</nav> */}

    <nav className="navbar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
              

               <h4 style={{color:'skyblue', fontFamily:'Times New Roman'}}>ADMIN PANEL</h4>
              {/* <li className="nav-item m-2">
                  <Link className="nav-link" to="/">
                   <strong>Admin Panel</strong> 
                  </Link>
                </li> */}

                <li className="nav-item m-2">
                  <Link className="nav-link" to="/">
                  <i class="fas fa-tachometer-alt"></i> DashBoard
                  </Link>
                </li>

                <li className="nav-item m-2">
                  <Link className="nav-link" to="/admin/home">
                    <i className="fas fa-home mr-2"></i> Homes
                  </Link>
                </li>

                <li className="nav-item m-2">
                  <Link className="nav-link" to="/admin/user">
                    <i className="fas fa-users mr-2"></i> Users
                  </Link>
                </li>  

                
                <li className="nav-item m-2">
                  <Link className="nav-link" to="/admin/category">
                    <i className="fas fa-th-list mr-2"></i> Categories
                  </Link>
                </li>
              </ul>
          </div>
    </nav>

    </div>
  )
}
