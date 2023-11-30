import React from 'react'

export default function HomeItem({homeItem, deleteHome}) {
  return (
    <>

<span className="card" style={{width: '18rem'}}>
  <img src="../public/assets/img/about-1.jpg" className="card-img-top" alt="Home Image" />
  <div className="card-body">
    <h5 className="card-title">{homeItem.title}</h5>
    <p className="card-text">{(homeItem.description).substring(0,10)}..</p>
    <button type="button" class="btn btn-danger" onClick={e=>deleteHome(homeItem.home_id)}>Delete</button>
  </div>
</span>
{/* E:\ReactDevelopment\ReactPractice\GharBhada\public\assets\img\about-1.jpg */}

    </>
  )
}
