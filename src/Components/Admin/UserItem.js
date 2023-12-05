import React from 'react'
import './UserItem.css'

export default function UserItem({user, handleDelete}) {
  return (
    <>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item m-2">
    <h2 class="accordion-header border border-success rounded">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${user.id}`} aria-expanded="false" aria-controls={`flush-collapse${user.id}`}>
        <h6>{user.name}</h6>
      </button>
    </h2>
    <div id={`flush-collapse${user.id}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul>
          <li><strong>Email: </strong>{user.email}</li>
          <li><strong>Phone: </strong>{user.phone}</li>
          <li><strong>Address: </strong>{user.address}</li>
        </ul>
      </div>
      <button type="button" class="btn btn-danger" onClick={(e) => handleDelete(user.id)}>Delete</button>
    </div> 
  </div>
  </div>

    </>
  )
}
