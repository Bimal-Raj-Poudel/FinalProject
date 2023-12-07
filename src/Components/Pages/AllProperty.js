import React from 'react'
import Properties from './Properties'
import Pagination from '../Admin/Pagination'

export default function AllProperty() {
  return (
    <>
      <div className='d-flex flex-column mt-2 position-relative '>

      <section className='d-flex justify-content-evenly gap-3 m-2'>

      <select class="form-select" aria-label="Default select example">
      <option selected >Price Range</option>
      <option value="1">RS.1,000-5,000</option>
      <option value="2">RS.5,000-1,000</option>
      <option value="3">RS.10,000</option>
       </select>
       
       <select class="form-select" aria-label="Default select example">
      <option selected>District</option>
      <option value="Kathmandu">Kathmandu</option>
      <option value="Pokhara">Pokhara</option>
      <option value="Rupandehi">Rupandehi</option>
       </select>

       <div className="input-group input-group-lg">
       <input type="text" class="form-control" placeholder='Search With Keyword' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
       <span className="input-group-text" id="inputGroup-sizing-lg"><i class="bi bi-search"></i></span>
       </div>
      </section>

      <div className='mt-3'>
      <Properties />
     
      </div>
      <Pagination />
      </div>
    </>
  )
}
