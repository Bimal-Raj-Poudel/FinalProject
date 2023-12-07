import React from 'react'

export default function Request() {
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

  <div className="mb-3">
    <label for="city" className="form-label"><p className='text-dark font-monospace'> City </p></label>
    <input type="text" className="form-control" id="city" required/>
  </div>

<div className='d-flex justify-content-around '>
  <div className='mb-2 font-monospace'>
  <label htmlFor="categorySelect">Choose a Category:</label><br/>
        <select className='form-select border border-success bg-light'
          id="districtSelect" required>
          <option value="">Select Category</option>
          <option value="Home">Home</option>
          <option value="Flat">Flat</option>
          <option value="SingleRoom">Single Room</option>
          <option value="ShutterRoom">Shutter Room</option>
          <option value="OfficeSpace">OfficeSpace</option>
        </select>
    </div>

  <div className='mb-2 font-monospace'>
  <label htmlFor="districtSelect" >Choose a district:</label><br/>
        <select className='form-select border border-success bg-light'
          id="districtSelect" required >
          <option value="">Select District</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Rupandehi">Rupandehi</option>
        </select>
    </div>

    <div className='mb-2 font-monospace'>
  <label htmlFor="photoInput">Choose a photo:</label>
    <input className='form-select border border-success bg-light'
          type="file"
          id="photoInput"
          accept="image/*"
        />
</div>

<div className='mb-2 font-monospace'>
  <label htmlFor="locationInput">Allow location:</label><br/>
  <button id='locationInput' className='btn btn-light' required><i class="bi bi-compass"></i></button>
</div>
</div>

  <button type="submit" className="btn btn-success mt-3 font-monospace">Submit</button>
</form>
</div>
    </div>
  )
}
