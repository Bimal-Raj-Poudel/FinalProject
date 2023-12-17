import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Request() {
  const [categoryId, setCategoryId] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);
  const [validation, setValidation] = useState({});

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amenities: '',
    city: '',
    area: '',
    price: '',
    bedroom: '',
    baths: '',
    district: '',
    latitude:'',
    longitude:''
  });

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            latitude: latitude,
            longitude: longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     try{

    const response = await axios.post(`http://localhost:8080/api/home/person/${'09213c81-f895-4dd0-bf08-dcf5b115a45c'}/category/${categoryId}`,formData);

    console.log("Uploaded Home is :", response.data.home_id);
    if(response.status === 201){
      const data = new FormData();
      data.append('homeId', response.data.home_id);
      data.append('image', selectedImage);

        try{
         const res = await axios.post(`http://localhost:8080/api/image/upload`,data);
         if(res.status === 201){
         console.log("Home has been listed :", response.data);
        
         toast.success("Home has been listed.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        });

         navigate('/');
                }
            }catch(error){
               console.log("Error happen while posting photo :", error.message);
        }
     
    }

     }catch(error){
      if(error.response && error.response.data){
        const { data } = error.response;
        setValidation(data)
       }
      console.log("Error happen while uploading home details :", error.message);
     }

   
    console.log(formData)

  };

  return (

<div className='container mt-2 d-flex flex-column font-monospace border border-success border-3 rounded p-4 shadow-lg'><div>

<h4>Add Your Property Details.</h4>

<form onSubmit={handleSubmit}>
  <div className='d-flex justify-content-around align-items-center gap-5'>

    <div className='d-flex flex-column justify-content-center ' style={{width:'30rem'}}>
  <div className="mb-3 mt-3">
    <label for="Title" className="form-label"><p className='text-dark font-monospace'>Title</p></label>
    <input type="text" className="form-control border border-success border-2" id="Title" aria-describedby="emailHelp" name='title' value={formData.title} onChange={handleInputChange} required />
    {validation.title && (<span className='text-danger'>{validation.title}</span>) }
  </div>

  <div className="mb-3">
    <label for="description" className="form-label"><p className='text-dark font-monospace'> Description </p></label>
    <input type="text" className="form-control border border-success border-2" id="Description" name='description' value={formData.description} onChange={handleInputChange} required/>
    {validation.description && (<span className='text-danger'>{validation.description}</span>) }
  </div>

  <div className="mb-3">
    <label for="Password" className="form-label"><p className='text-dark font-monospace'> Amenities </p></label>
    <input type="text" className="form-control border border-success border-2" id="Password" name='amenities' value={formData.amenities} onChange={handleInputChange} required/>
  </div>

  <div className="mb-3">
    <label for="city" className="form-label"><p className='text-dark font-monospace'> City </p></label>
    <input type="text" className="form-control border border-success border-2" id="city" name='city' value={formData.city} onChange={handleInputChange} required/>
  </div>
  </div>

  <div className='d-flex flex-column'>
  <div className="mb-3">
    <label for="area" className="form-label"><p className='text-dark font-monospace'> Area </p></label>
    <input type="number" className="form-control border border-success border-2" id="area" name='area' value={formData.area} onChange={handleInputChange} placeholder='In m^2' required/>
  </div>

  <div className="mb-3">
    <label for="price" className="form-label"><p className='text-dark font-monospace'> Price </p></label>
    <input type="number" className="form-control border border-success border-2" id="price" name='price' value={formData.price} onChange={handleInputChange} placeholder='In Rupees' required/>
  </div>

  <div className="mb-3">
    <label for="bedroom" className="form-label"><p className='text-dark font-monospace'> Bedroom </p></label>
    <input type="number" className="form-control border border-success border-2" id="bedroom"  name='bedroom' value={formData.bedroom} onChange={handleInputChange} required/>
  </div>

  <div className="mb-3">
    <label for="bathroom" className="form-label"><p className='text-dark font-monospace'> Bathroom </p></label>
    <input type="number" className="form-control border border-success border-2" id="bathroom" name='baths' value={formData.baths} onChange={handleInputChange} required/>
  </div>
  </div>
  </div>

<div className='d-flex justify-content-around '>
  <div className='mb-2 font-monospace'>
  <label htmlFor="categorySelect">Choose a Category:</label><br/>
        <select className='form-select border border-success border-2 bg-light'
          id="districtSelect" name='category' value={formData.category} onChange={e => setCategoryId(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="1">Single Room</option>
          <option value="2">Shutter Room</option>
          <option value="3">Home</option>
          <option value="4">Flat</option>
          <option value="5">OfficeSpace</option>
        </select>
    </div>

  <div className='mb-2 font-monospace'>
  <label htmlFor="districtSelect" >Choose a district:</label><br/>
        <select className='form-select border border-success border-2 bg-light'
          id="districtSelect" name='district' value={formData.district} onChange={handleInputChange} required >
          <option value="">Select District</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Rupandehi">Rupandehi</option>
        </select>
    </div>

    <div className='mb-2 font-monospace '>
  <label htmlFor="photoInput">Choose a photo:</label>
    <input className='form-select border border-success border-2 bg-light'
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handleImageChange}
        />
</div>

<div className='mb-2 font-monospace'>
  <label htmlFor="locationInput">Allow location:</label><br/>
  <button id='locationInput' className='btn btn-light border border-success border-2' onClick={handleLocationClick} required><i class="bi bi-compass"></i></button>
</div>
</div>

  <button type="submit" className="btn btn-success mt-3 font-monospace align-self-center">Submit</button>

</form>
</div>
    </div>
  )
}
