import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDashBoard() {
    const propertyDetails = [
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        {
          propertyTItle: "204 Mount Olive Road Two",
          rentPrice: 12000,
          link: "",
          roomDetails: {
            area: 340,
            beds: 2,
            baths: 3,
            garages: 1
          }
        },
        
      ]
  return (
<>
    <div id="main d-flex flex-column mt-5">

    <section className="property-grid grid">
      <div className="container">
        <div className="row">

        {propertyDetails.map((data, index)=>(

          <div className="col-md-4" key={index+1}>
              <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="assets/img/property-1.jpg" alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="#">{data.propertyTItle}</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | RS. {data.rentPrice}</span>
                    </div>
                    <Link to={`/dashboard/home/${index}`}  className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a bg-danger d-flex justify-content-center align-items-stretch" >

                  
                   {/* Delete Button Setup */}
                    <ul className="card-info d-flex justify-content-around">
                    <li>
                    <button type="button" class="btn btn-danger"><h4>Delete</h4></button>
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
    </>
  )
}
