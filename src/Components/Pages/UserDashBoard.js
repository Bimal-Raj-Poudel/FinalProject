import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UserDashBoard() {

  const [reload, setReload] = useState(false);
  const authUser =useContext(AuthContext);
  const [home, setHome] = useState([]);
  console.log(authUser);

  useEffect(() => {
    console.log(authUser.encodedCredentials)
     axios.get(`http://localhost:8080/api/home/person/${authUser.person_id}`,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })
     .then(res => setHome(res.data))
     .catch(error => console.log("Error fetching homes by personId :",error.message));
  },[reload])

  //Handle delete 
  const handleDelete = async (homeId) => {
    console.log("Delete Button clicked :", homeId)
    const response = await axios.delete(`http://localhost:8080/api/home/${homeId}/person/${authUser.person_id}`,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })
    console.log("Response :", response.status);
    if(response.status === 200){
      console.log("Toastify should work.");
      toast.warn("Home has been deleted.", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored"
      });
    }
    setReload(reload => !reload)
  }

  return (
<div className='mt-5'>
    <div id="main d-flex flex-column mt-5">

    <section className="property-grid grid">
      <div className="container">
        <div className="row">

        {home && home.map((data, index)=>(

          <div className="col-md-4" key={data.home_id}>
              <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="assets/img/property-1.jpg" alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">{data.title}</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | RS. {data.price}</span>
                    </div>
                    <Link to={`/dashboard/home/${data.home_id}`}  className="link-a">Click here to Edit Info
                      <span className="bi bi-chevron-right"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a bg-danger d-flex justify-content-center align-items-stretch" >

                  
                   {/* Delete Button Setup */}
                    <ul className="card-info d-flex justify-content-around">
                    <li>
                    <button type="button" class="btn btn-danger" onClick={() => handleDelete(data.home_id)}><h4>Delete</h4></button>
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
               ))}
        </div>
      </div>
    </section>

    </div>
    </div>
  )
}
