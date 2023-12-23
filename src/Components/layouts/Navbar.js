import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';

const Navbar = ({setAuthUser}) => {

  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);

  const authUser =useContext(AuthContext);

const handleLogOut = () =>{
  navigate("/");
  setAuthUser('');
  toast.warn("Logged out successfully",{
    position: "top-center",
    autoClose: 2000,
    theme: "colored"
  })
  
}  


  return (
    <>
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg sticky-top text-decoration-none">
    <div className="container">
     
      <Link className="navbar-brand text-brand" to="/"><strong>Ghar</strong><span className="color-b"><strong>Bhada</strong></span></Link>
      
      <div className="navbar-collapse collapse justify-content-evenly" id="navbarDefault">

        <ul className="navbar-nav text-decoration-none ">

          <li className="nav-item">
           <NavLink to="/" style={{textDecoration:"none"}} activeClassName="active"> 
           <p className="nav-link text-decoration-none text-success " >Home</p>
           </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/property" style={{textDecoration:"none"}} activeClassName="active">
            <p className={`nav-link  text-success`} >Property</p></NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/aboutUs" style={{textDecoration:"none"}} activeClassName="active">
            <p className={`nav-link  text-success `} >AboutUs</p></NavLink>
          </li>


          <li className="nav-item dropdown">
            <li className="nav-link dropdown-toggle text-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category</li>
            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
              <Link to="/singleRoom" style={{textDecoration:"none"}} ><p className="dropdown-item text-success" > SingleRooms </p></Link>
              <Link to="/shutterRoom" style={{textDecoration:"none"}} ><p className="dropdown-item text-success"> Shutter Rooms </p></Link>
              <Link to="/house" style={{textDecoration:"none"}} ><p className="dropdown-item text-success" > House </p></Link>
              <Link to="/flat" style={{textDecoration:"none"}} ><p className="dropdown-item text-success" > Flat </p></Link>
              <Link to="/officeSpace" style={{textDecoration:"none"}} ><p className="dropdown-item text-success" > Office Space </p></Link>
            </div>
          </li>

          <li className="nav-item">
            <NavLink to= "/nearMe" style={{textDecoration:"none"}} activeClassName="active"> 
            <p className={`nav-link  text-success `} 
            >NearMe</p></NavLink>
          </li>

          <li className={`nav-item`} >
            <NavLink to= "/request" style={{textDecoration:"none"}} activeClassName="active"> 
            <p className={`nav-link  text-success`} 
            >Request</p></NavLink>
          </li>

          <li className="nav-item">
            <NavLink to= "/contactUs" style={{textDecoration:"none"}} activeClassName="active"> 
            <p className={`nav-link  text-success `} 
           >Contact Us</p></NavLink>
          </li>

          <li className="nav-item">
            <NavLink to= "/SignIn" style={{textDecoration:"none"}} activeClassName="active"> 
            <p className={`nav-link  text-success `} 
            >{authUser.isAuthenticated?`Hello, ${authUser.name}`:'LogIn'}</p></NavLink>
          </li>

          <li className="nav-item">
          </li>
        </ul>
      </div>
      <div class="dropdown font-monospace">
      <a class={`btn btn-success dropdown-toggle ${authUser.isAuthenticated?"visible":"invisible"}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <i class="bi bi-speedometer"> DashBoard</i>
      </a>
      <ul class="dropdown-menu rounded">
    <li><Link class="dropdown-item" to="/dashBoard" activeClassName="active">My Listing</Link></li>
    <li><Link class="dropdown-item" to="#" onClick={handleLogOut} activeClassName="active">LogOut</Link></li>
  </ul>
</div>
            
    </div>
  </nav>


    </>
  );
}

export default Navbar;
