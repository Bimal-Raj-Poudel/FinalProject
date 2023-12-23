import React from 'react'
import './UserItem.css'

export default function UserItem({user, handleDelete}) {
  return (
    <>
  <div class="accordion-item m-2 ">
    <h2 class="accordion-header border border-3 border-success rounded-3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${user.person_id}`} aria-expanded="false" aria-controls={`flush-collapse${user.person_id}`}>
        <h6>{user.name}</h6>
      </button>
    </h2>
    <div id={`flush-collapse${user.person_id}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body font-monospace">
        <ul>
          <li><strong>Id: </strong>{user.person_id}</li>
          <li><strong>Email: </strong>{user.email}</li>
          <li><strong>Phone: </strong>{user.phone}</li>
          <li><strong>Address: </strong>{user.address}</li>
        </ul>
      </div>
      <button type="button" class="btn btn-danger" onClick={(e) => handleDelete(user.person_id)}>Delete</button>
    </div> 
  </div>
    </>
  )
}
