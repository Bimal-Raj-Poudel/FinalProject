
import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertySingle = () => {

  const [singleHome, setSingleHome] = useState({});
  const [rate, setRate] = useState(1);

  const {id} = useParams();

  const fetchData = () => {

     axios.get(`http://localhost:8080/api/home/${id}`)
     .then(res => setSingleHome(res.data))
     .catch(error => console.log("Error in single Property :", error.message));
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log("Id :", id);
  
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
    }]

    
   return (
     <>
     
      <section class="property-single nav-arrow-b mt-3">
      <div class="container">

        <div class="row">
          <div class="col-sm-12">

            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">

               {/* Image and Badge setup */}
                <div class="d-flex justify-content-center ">
                  <div className="card-header-c d-flex">
                  <span class={`badge text-bg-${singleHome.rented ?'danger' :'primary'} position-absolute m-3`}>{singleHome.rented ? "NotAvailable":"Available"}</span>
                     <img src="/assets/img/slide-2.jpg" alt="Error Loading..." style={{ width: '100%', height: '400px' }}/>
                  </div>
                </div>

                <div className='left-0'><Rating stars = {singleHome.averageRating}/></div>

                <div className='d-flex  justify-content-center  rounded gap-1'>
                  <h6 className='font-monospace fs-5'>Rate your experience. </h6>
                  <div className='d-flex gap-2'> 
                  <i class="bi bi-patch-minus-fill text-warning fs-5" onClick={e => setRate(rate===1?(1):(rate-1))} style={{cursor:'pointer'}} /><span className='fs-5 fw-bolder'>{rate}</span><i class="bi bi-patch-plus-fill  text-warning  fs-5" onClick={e => setRate(rate===5?(5):(rate+1))} style={{cursor:'pointer'}} />
                  <i class="bi bi-send-fill text-warning  fs-5" style={{cursor:'pointer'}} >Send</i>
                  </div>
                </div>

                <div class="property-summary">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Quick Summary</h3>
                      </div>
                    </div>
                  </div>
                  <div class="summary-list">
                    <ul class="list">
                      <li class="d-flex justify-content-between">
                        <strong>Property ID:</strong>
                        <span>{singleHome.home_id}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Location:</strong>
                        <span>Chicago, IL 606543</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Property Type:</strong>
                        <span>{singleHome.category && singleHome.category.categoryName}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Status:</strong>
                        <span>{singleHome.rented ? 'Yes':'No'}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Area:</strong>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Beds:</strong>
                        <span>4</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Baths:</strong>
                        <span>2</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Garage:</strong>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Property Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description ">
                  <p class="description color-text-a fw-semibold">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                    Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar quam id dui posuere blandit.
                  </p>
                  {/* <p class="description color-text-a no-margin">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                    malesuada. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                  </p> */}
                </div>
                <div class="row section-t3">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d ">Amenities</h3>
                    </div>
                  </div>
                </div>
                <div class="amenities-list color-text-a fw-semibold">
                  <ul class="list-a no-margin">
                    <li>Balcony</li>
                    <li>Outdoor Kitchen</li>
                    <li>Cable Tv</li>
                    <li>Deck</li>
                    <li>Tennis Courts</li>
                    <li>Internet</li>
                    <li>Parking</li>
                    <li>Sun Room</li>
                    <li>Concrete Flooring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* MAP Location of Property */}
          <div className='mt-2'>
            <h4>See Location</h4>
            <iframe src={`https://maps.google.com/maps?q=${singleHome.latitude},${singleHome.longitude}&hl=es;&output=embed`} id="iframeId" height="500px" width="100%"></iframe>
        </div>

        {/* Comment section */}

        <div className='mt-4 bg-success-subtle rounded-3'>
        <div className='m-2 fw-bolder'>Add Comments</div>
        
        <div className="form-floating">
        <textarea className="form-control border border-success rounded-4" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} />
        <label for="floatingTextarea2">Add Comment.</label>
        <button className='fw-2 p-1 m-2 btn btn-success rounded'><i class="fas fa-paper-plane"></i> send</button>
        
        </div>
          <ul>
          <li className='font-monospace'><i class="fas fa-user-tie p-2"></i>Kati ramro xa tah ghar</li>
          <li className='font-monospace'><i class="fas fa-user-tie p-2"></i>Dherai nai man paro</li>
          </ul>
        </div>
    
          {/* Contact owner section */}
          <div class="col-md-12  ">

            <div class="row section-t3">
              <div class="col-sm-12">
                <div class="title-box-d">
                  <h3 class="title-d">Contact Owner</h3>
                </div>
              </div>
            </div>


            <div class="row d-flex justify-content-between">

              <div class="col-md-6 col-lg-4">
                <div class="property-agent">

                  <h4 class="title-agent">{singleHome.person && singleHome.person.name}</h4>
                  <p class="color-text-a font-monospace">
                    Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                    dui. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim.
                  </p>
                  <ul class="list-unstyled">
                    <li class="d-flex justify-content-between">
                      <strong>Phone:</strong>
                      <span class="color-text-a">(+977) {singleHome.person && singleHome.person.phone}</span>
                    </li>
                    <li class="d-flex justify-content-between">
                      <strong>Mobile:</strong>
                      <span class="color-text-a">777 287 378 737</span>
                    </li>
                    <li class="d-flex justify-content-between">
                      <strong>Email:</strong>
                      <span class="color-text-a">{singleHome.person && singleHome.person.email}</span>
                    </li>
                    <li class="d-flex justify-content-between">
                      <strong>Address:</strong>
                      <span class="color-text-a">{singleHome.person && singleHome.person.address}</span>
                    </li>
                  </ul>
                  <div class="socials-a">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
               </div>
              </div>

              {/* Send Message */}
              
              <div class="col-md-12 col-lg-4">
                <div class="property-contact">

              

                  <form class="form-a">
                    <div class="row">
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <input type="text" class="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required/>
                        </div>
                      </div>
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required/>
                        </div>
                      </div>
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 mt-3">
                        <button type="submit" class="btn btn-a">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

     </>
   );
 }
 
 export default PropertySingle;
 