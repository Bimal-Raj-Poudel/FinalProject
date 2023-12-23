import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Properties = ({property}) => {
  
  

  return (
    <>
    <div id="main d-flex flex-column">

    <section className="property-grid grid">
      <div className="container">
        <div className="row">

        {property && property.map((data, index)=>(

          <div className="col-md-4" key={data.home_id}>
              <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <span className='position-absolute m-2'><Rating stars={data.averageRating}/></span>
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
                    <Link to={`/property/${data.home_id}`}  className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                    <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>{data.area}m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>{data.bedroom}</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>{data.baths}</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>{"None"}</span>
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
