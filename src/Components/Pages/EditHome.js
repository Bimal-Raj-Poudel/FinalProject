import React from 'react'

export default function EditHome() {
  return (
    <div className='container mt-2 d-flex flex-column font-monospace'><div>

<h4>Add Your Property Details.</h4>

<form >
  <div className="mb-3 mt-3">
    <label for="Title" className="form-label"><p className='text-dark font-monospace'>Title</p></label>
    <input type="email" className="form-control" id="Title" aria-describedby="emailHelp"  required />
  </div>

  <div className="mb-3">
    <label for="description" className="form-label"><p className='text-dark font-monospace'> Description </p></label>
    <input type="text" className="form-control" id="Description" required/>
  </div>

  <div className="mb-3">
    <label for="Password" className="form-label"><p className='text-dark font-monospace'> Amenities </p></label>
    <input type="text" className="form-control" id="Password" required/>
  </div>


<div className='d-flex justify-content-around mb-3'>

<div className=" align-self-center">
    <label for="Password" className="form-label"><span className='text-dark font-monospace'> Rent Price </span></label>
    <input type="text" className="form-control" id="Password" placeholder='In RS.' required/>
  </div>

<select class="form-select font-monospace align-self-center" aria-label="Default select example" style={{width:'10rem', height:'3rem'}} >
  <option selected>Rent Status </option>
  <option value="1">Rented</option>
  <option value="0">Not Rented</option>
</select>
  
    <div className='mb-2 font-monospace'>
  <label htmlFor="photoInput">Choose a photo:</label>
    <input className='form-select border border-success bg-light'
          type="file"
          id="photoInput"
          accept="image/*"
        />
</div>
</div>

  <button type="submit" className="btn btn-success mt-3 font-monospace">Submit</button>
</form>
</div>
    </div>
  )
}
