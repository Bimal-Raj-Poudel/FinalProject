import React from 'react'
import './HomeItem.css'

export default function HomeItem({homeItem, deleteHome}) {
  return (
    <div >

<span className="card houseItem">
  <img src="/assets/img/about-1.jpg" className="card-img-top" alt="Home Image" />
  <div className="card-body cardBodyFlex">
    <h5 className="card-title">{(homeItem.title).substring(0,28)}</h5>
    <p className="card-text">{(homeItem.description).substring(0,10)}..</p>
    <button type="button" class="btn btn-danger" onClick={e=>deleteHome(homeItem.id)}>Delete</button>
  </div>
</span>


    </div>
  )
}
