import React from 'react'
import Rating from './Rating'

export default function Error() {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className='font-monospace'>
        <i class="bi bi-bug-fill" style={{fontSize:'4em',height:'10rem',width:'10rem'}}>
        <h1>404 ERROR PAGE</h1>
      <h4>Sorry, This page doesn't exist.</h4>
        </i>
     
      </div>
    </div>
  )
}
