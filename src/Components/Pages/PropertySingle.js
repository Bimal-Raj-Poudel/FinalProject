
import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';

const PropertySingle = () => {

  const [reload, setReload] = useState(false);
  const [singleHome, setSingleHome] = useState({});
  const [rate, setRate] = useState(1);
  const [comment, setComment] = useState([]);
  const [addComment, setAddComment] = useState('');
  const [individualRating, setIndividualRating] = useState(-1);
  const authUser =useContext(AuthContext);
  const {id} = useParams();

  const navigate = useNavigate();

  const fetchData = async () => {
    try{
    const response = await axios.get(`http://localhost:8080/api/home/${id}`);

    if(response.status === 200){
      setSingleHome(response.data);
      console.log(response.data.images.length)

      //Load individual rating
      axios.get(`http://localhost:8080/api/rating/user/${authUser.person_id}/home/${id}`,{
        headers: {
          'Authorization': `Basic ${authUser.encodedCredentials}`
        }
      }).then(response =>{ 
        console.log("Individual rating :",response.data.user)
        setIndividualRating(response.data.userRating);
      })
      .catch(error => console.log("Error while loading individual rating :", error.message));

      //Load comment
      axios.get(`http://localhost:8080/api/comment/home/${id}`)
      .then(res => {
        setComment(res.data)
      })
      .catch(err => console.log("Error while loading comment :", err.message))
    }
  } catch(error) {
    console.log("Error while loading single home :", error.message);
  }
  }

  useEffect(() => {
    fetchData();
  },[reload])

  //Handle Rating
  const handleRate = async () =>{
    
    if(!authUser.isAuthenticated){
    toast.warn("You must log in before rating.", {
      position: 'bottom-center',
      autoClose: 3000,
      theme: 'colored'
    })
    navigate('/signIn');
  }
else{
    const data = {
      ratingValue:rate
    }

    const response = await axios.post(`http://localhost:8080/api/rating/user/${authUser.person_id}/home/${id}`, data,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })
    if(response.status === 201){
      toast.success("Your Rating submitted.", {
        position: 'bottom-center',
        autoClose: 3000,
        theme: 'colored'
      })
      setReload(!reload);
    }}
  }

  //Add comment
  const handleSendComment = async (e) => {
    e.preventDefault();
    const data = {
      content: addComment
    }
    const response = await axios.post(`http://localhost:8080/api/comment/user/${authUser.person_id}/home/${id}`, data,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })

    if(response.status === 201){
      toast.success("Your comment added.", {
        position: 'bottom-center',
        autoClose: 3000,
        theme: 'colored'
      })
      setAddComment("");
      setReload(!reload);
    }

  }

    
   return (
     <>
     
      <section class="property-single nav-arrow-b mt-3">
      <div class="container">

        <div class="row">
          <div class="col-sm-12">

            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">

               {/* Image and Badge setup */}
                <div class="d-flex justify-content-center">
                  <div className="card-header-c d-flex shadow">
                  <span class={`badge text-bg-${singleHome.rented ?'danger' :'primary'} position-absolute m-3`} >{singleHome.rented ? "NotAvailable":"Available"}</span>
                     {/* <img src="/assets/img/property-1.jpg" alt="Error Loading..." style={{ width: '400px', height: '400px' }}/> */}
                     <img src={singleHome.images != null ? `/assets/property/${singleHome.images[0].image_path}` : '/assets/img/property-1.jpg'} alt="Error Loading..." style={{ width: '400px', height: '400px' }}/>
                  </div>
                </div>

                <div className='left-0'><Rating stars = {singleHome.averageRating}/></div>

                
                <div className='d-flex  justify-content-center bg-secondary shadow  rounded gap-1'>
                  {individualRating != -1 ?
                    <div>
                    <h6 className='font-monospace fs-5 text-white'>You rated this property as {individualRating}.</h6>
                    </div> :
                  <div>
                <h6 className='font-monospace fs-5 text-white'>Rate this property!! </h6>
                  <div className='d-flex gap-2 '> 
                  <i class="bi bi-patch-minus-fill text-warning fs-5" onClick={e => setRate(rate===1?(1):(rate-1))} style={{cursor:'pointer'}} /><span className='fs-5 fw-bolder text-white'>{rate}</span><i class="bi bi-patch-plus-fill  text-warning  fs-5" onClick={e => setRate(rate===5?(5):(rate+1))} style={{cursor:'pointer'}} />
                  <i class="bi bi-send-fill text-warning  fs-5" style={{cursor:'pointer'}} onClick={handleRate}>Send</i>
                  </div>
                  </div>
                   }
                </div>
                 
                

                <h3 className='mt-3'>RS. {singleHome.price} <sup>per month</sup></h3> 

                <div class="property-summary"> 
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Quick Summary</h3>
                      </div>
                    </div>
                  </div>
                  <div class="summary-list bg-light rounded-3 shadow   p-3">
                    <ul class="list">
                      <li class="d-flex justify-content-between">
                        <strong> ID:</strong>
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
                        <span>{singleHome.rented ? 'Rented':'Not Rented'}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Area:</strong>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>BedRoom:</strong>
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
                      <h3 class="title-d">Property Title</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description ">
                  <p class="description color-text-a fw-bolder font-monospace">
                    {singleHome.title}
                  </p>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Property Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description ">
                  <p class="description color-text-a fw-semibold font-monospace">
                    {singleHome.description}
                  </p>
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
            <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">See Location</h3>
                      </div>
                    </div>
                  </div>
            <iframe src={`https://maps.google.com/maps?q=${singleHome.latitude},${singleHome.longitude}&hl=en;&output=embed`} id="iframeId" height="500px" width="100%"></iframe>
        </div>

        {/* Comment section */}
        <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Add Comment</h3>
                      </div>
                    </div>
                  </div>

        <div className='mt-1 bg-success-subtle rounded-3'>                 
        <div className="form-floating">
        <textarea className="form-control border border-success rounded-4 mt-3" placeholder="Leave a comment here" id="floatingTextarea2" value={addComment} onChange={e => setAddComment(e.target.value)} style={{height: "100px"}} />
        <label for="floatingTextarea2">Add Comment.</label>
        <button className={`fw-2 p-1 m-2 btn btn-success rounded ${authUser.isAuthenticated ?"":"disabled"}`} onClick={handleSendComment} ><i class="fas fa-paper-plane"></i> send</button>
        
        </div>
          <ul>
          <li className='font-monospace'><i class="fas fa-user-tie p-2"></i>Kati ramro xa tah ghar</li>
          <li className='font-monospace'><i class="fas fa-user-tie p-2"></i>Dherai nai man paro</li>
          {comment && comment.map(value => (
            <li className='font-monospace'><i class="fas fa-user-tie p-2"></i>{value.content}</li>
          )
          )}
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
 