import React from 'react'
import './UserItem.css'

export default function UserItem({user, handleDelete}) {
  return (
    <>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${user.id}`} aria-expanded="false" aria-controls={`flush-collapse${user.id}`}>
        {user.name}
      </button>
    </h2>
    <div id={`flush-collapse${user.id}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      <button type="button" class="btn btn-danger" onClick={(e) => handleDelete(user.id)}>Delete</button>
    </div> 
  </div>
  </div>

    </>
  )
}
