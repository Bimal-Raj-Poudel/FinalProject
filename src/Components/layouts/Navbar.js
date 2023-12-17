import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

const Navbar = ({setAuthUser}) => {

  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);

  const authUser =useContext(AuthContext);

  console.log("User from navBar",authUser.name)

const handleLogOut = () =>{
  setAuthUser('');
  navigate('/');
}  

  const handleActive = () =>{
    setActive(true);
  }

  return (
    <>
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg sticky-top">
    <div className="container">
     
      <Link className="navbar-brand text-brand" to="/"><strong>Ghar</strong><span className="color-b"><strong>Bhada</strong></span></Link>
      
      <div className="navbar-collapse collapse justify-content-evenly" id="navbarDefault">

        <ul className="navbar-nav text-decoration-none ">

          <li className="nav-item">
           <Link to="/" > 
           <p className="nav-link active text-decoration-none text-success text-decoration-underline" >Home</p>
           </Link>
          </li>

          <li className="nav-item">
            <Link to="/property">
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive' }`} onClick={handleActive}>Property</p></Link>
          </li>

          <li className="nav-item">
            <Link to="/aboutUs">
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive' }`} onClick={handleActive}>AboutUs</p></Link>
          </li>


          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category</a>
            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
              <Link to="/singleRoom"><p className="dropdown-item text-success" > SingleRooms </p></Link>
              <Link to="/shutterRoom"><p className="dropdown-item text-success"> Shutter Rooms </p></Link>
              <Link to="/house"><p className="dropdown-item text-success" > House </p></Link>
              <Link to="/flat"><p className="dropdown-item text-success" > Flat </p></Link>
              <Link to="/officeSpace"><p className="dropdown-item text-success" > Office Space </p></Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to= "/nearMe" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} 
            onClick={handleActive}>NearMe</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/request" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} 
            onClick={handleActive}>Request</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/contactUs" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} 
            onClick={handleActive}>Contact Us</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/SignIn" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} 
            onClick={handleActive}>{authUser.isAuthenticated?`Hello, ${authUser.name}`:'LogIn'}</p></Link>
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
    <li><Link class="dropdown-item" to="/dashBoard">My Listing</Link></li>
    <li><Link class="dropdown-item" to="#" onClick={handleLogOut}>LogOut</Link></li>
  </ul>
</div>
            
    </div>
  </nav>


    </>
  );
}

export default Navbar;
