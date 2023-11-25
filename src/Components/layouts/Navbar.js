import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a className="navbar-brand text-brand" href="index.html">Ghar<span className="color-b">Bhada</span></a>

      <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul className="navbar-nav">

          <li className="nav-item">
           <Link to="/" > 
           <p className="nav-link active" >Home</p>
           <P></P>
           </Link>
          </li>

          <li className="nav-item">
            <Link to="/aboutUs">
            <p className="nav-link ">AboutUs</p></Link>
          </li>

          <li className="nav-item">
            <Link to='/property'>
            <p className="nav-link">Property</p>
            </Link>
          </li>

         

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service Provided</a>
            <div className="dropdown-menu">
              <Link to="/SingleRoom"><p className="dropdown-item " > SingleRooms </p></Link>
              <Link to="/ShutterRoom"><p className="dropdown-item "> Shutter Rooms </p></Link>
              <Link to="/House"><p className="dropdown-item " > House </p></Link>
              <Link to="/Flat"><p className="dropdown-item " > Flat </p></Link>
              <Link to="/Officespace"><p className="dropdown-item " > Office Space </p></Link>
             
            </div>
          </li>
          <li className="nav-item">
            <Link to= "/ContactUs" > 
            <p className="nav-link ">Contact Us</p></Link>
          </li>
        </ul>
      </div>

      <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <i className="bi bi-search"> Search By Place</i>
      </button>

    </div>
  </nav>


    </>
  );
}

export default Navbar;
