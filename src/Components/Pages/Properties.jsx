import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Properties = () => {
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


  console.log(propertyDetails)
  return (
    <>
    <div id="main d-flex flex-column">

    {/* <section class="intro-single ">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Our Amazing Properties</h1>
              <span class="color-text-a">Grid Properties</span>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="property-grid grid">
      <div className="container">
        <div className="row">

        {propertyDetails.map((data, index)=>(

          <div className="col-md-4" key={index+1}>
              <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <span className='position-absolute m-2'><Rating /></span>
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
                    <Link to={`/Property/${index}`}  className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                    <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>{data.roomDetails.area}m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>{data.roomDetails.beds}</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>{data.roomDetails.baths}</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>{data.roomDetails.garages}</span>
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
      {/* <Pagination /> */}
    </section>

    </div>
    </>
  );
}

export default Properties;
