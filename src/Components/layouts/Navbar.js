import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const handleDeActive = () =>{

  }

  const handleActive = () =>{
    handleDeActive();
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
            <a className="nav-link dropdown text-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category</a>
            <div className="dropdown-menu ">
              <Link to="/singleRoom"><p className="dropdown-item text-success" > SingleRooms </p></Link>
              <Link to="/shutterRoom"><p className="dropdown-item text-success"> Shutter Rooms </p></Link>
              <Link to="/house"><p className="dropdown-item text-success" > House </p></Link>
              <Link to="/flat"><p className="dropdown-item text-success" > Flat </p></Link>
              <Link to="/officeSpace"><p className="dropdown-item text-success" > Office Space </p></Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to= "/nearMe" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} onClick={handleActive}>NearMe</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/request" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} onClick={handleActive}>Request</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/contactUs" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} onClick={handleActive}>Contact Us</p></Link>
          </li>

          <li className="nav-item">
            <Link to= "/SignIn" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} onClick={handleActive}>Login</p></Link>
          </li>

        </ul>
      </div>

      
{/* <form class="d-flex" role="search">
        <input className="form-control me-2 border border-4 border-success" type="search" placeholder="Search" aria-label="Search"/>
      </form> */}


      {/* <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse d-flex rounded" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <input
        type="text"
        placeholder='Search'
        className="form-control border border-success" 
      />
      <i className='bi bi-search m-1' />
      </button> */}
      {/* <div className='d-flex justify-content-center align-items-top'>
      <div className="nav-item m-2">
            <Link to= "/signIn" > 
            <p className={`nav-link text-decoration-underline text-success ${isActive ? 'active' : 'inactive'}`} onClick={handleActive}>Login</p></Link>
          </div>
          <div>
       <div className='d-flex text-bg-success border rounded p-1 '> */}
        
      {/* <input
        type="text"
        placeholder="Search"
        className="form-control border border-success rounded-start"
        style={{ flex: '1', marginRight: '5px' }}
      />
      <i className="bi bi-search m-1"></i> */}
    {/* </div>
    </div>
    </div> */}
    </div>
  </nav>


    </>
  );
}

export default Navbar;
