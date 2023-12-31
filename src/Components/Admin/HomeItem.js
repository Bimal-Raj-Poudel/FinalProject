import React from 'react'
import './HomeItem.css'

export default function HomeItem({homeItem, deleteHome}) {
  return (
    <div >

<span className="card houseItem" style={{height:'350px',width:'300px'}}>
  {/* <img src="/assets/img/about-1.jpg" className="card-img-top" alt="Home Image" /> */}
  <img src={`${homeItem.images[0].image_path ? `/assets/property/${homeItem.images[0].image_path}`:'/assets/img/property-1.jpg'}`} alt="" className="img-a img-fluid" style={{height:'150px',width:'300px'}}/>
  <div className="card-body cardBodyFlex">
    <h5 className="card-title ">{(homeItem.title).substring(0,28)}</h5>
    <p className="card-text text-dark">{(homeItem.description).substring(0,20)}..</p>
    <p className='text-dark'>Updated At {new Date(homeItem.updatedAt).toISOString()}</p>
    <button type="button" class="btn btn-danger" onClick={e=>deleteHome(homeItem.home_id)}>Delete</button>
  </div>
</span>


    </div>
  )
}
