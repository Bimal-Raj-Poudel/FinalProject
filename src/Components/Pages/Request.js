import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Request() {
  const [categoryId, setCategoryId] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);
  const [validation, setValidation] = useState({});

  const authUser =useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!authUser.isAuthenticated){
      toast.info("Please Login/Register before Listing Property", {
        position: "top-center",
            autoClose: 3000,
            theme: "colored"
      });
      navigate('/signIn');
    }
  },[])

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
          toast.info("Location added.", {
            position: "top-center",
            autoClose: 200,
            theme: "colored"
          })
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
    console.log("Submit button clicked")
    e.preventDefault();
     try{

    const response = await axios.post(`http://localhost:8080/api/home/person/${authUser.person_id}/category/${categoryId}`,formData,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    });

    console.log("Uploaded Home is :", response.data.home_id);
    if(response.status === 201){
      const data = new FormData();
      data.append('homeId', response.data.home_id);
      data.append('image', selectedImage);

        try{
         const res = await axios.post(`http://localhost:8080/api/image/upload`,data,{
          headers: {
            'Authorization': `Basic ${authUser.encodedCredentials}`
          }
        });
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
    <label for="Title" className="form-label"><p className='text-dark font-monospace'>Title <span className='text-danger'>*</span></p></label>
    <input type="text" className="form-control border border-success border-2" id="Title" aria-describedby="emailHelp" name='title' value={formData.title} onChange={handleInputChange} />
    {validation.title && (validation.title.map(value => <div className='text-danger'>{value}</div>) ) }
  </div>

  <div className="mb-3">
    <label for="description" className="form-label"><p className='text-dark font-monospace'> Description <span className='text-danger'>*</span> </p></label>
    <input type="text" className="form-control border border-success border-2" id="Description" name='description' value={formData.description} onChange={handleInputChange}/>
    {validation.description && (validation.description.map(value => <div className='text-danger'>{value}</div>) ) }
  </div>

  <div className="mb-3">
    <label for="Password" className="form-label"><p className='text-dark font-monospace'> Amenities <span className='text-danger'>*</span></p></label>
    <input type="text" className="form-control border border-success border-2" id="Password" name='amenities' value={formData.amenities} onChange={handleInputChange} placeholder='Use comma to separate'/>
    {validation.amenities && (<span className='text-danger'>{validation.amenities}</span>) }
  </div>

  <div className="mb-3">
    <label for="city" className="form-label"><p className='text-dark font-monospace'> City <span className='text-danger'>*</span></p></label>
    <input type="text" className="form-control border border-success border-2" id="city" name='city' value={formData.city} onChange={handleInputChange}/>
    {validation.city && (<span className='text-danger'>{validation.city}</span>) }
  </div>
  </div>

  <div className='d-flex flex-column'>
  <div className="mb-3">
    <label for="area" className="form-label"><p className='text-dark font-monospace'> Area <span className='text-danger'>*</span></p></label>
    <input type="number" className="form-control border border-success border-2" id="area" name='area' value={formData.area} onChange={handleInputChange} placeholder='In m^2' />
    {validation.area && (<span className='text-danger'>{validation.area}</span>) }
  </div>

  <div className="mb-3">
    <label for="price" className="form-label"><p className='text-dark font-monospace'> Price <span className='text-danger'>*</span></p></label>
    <input type="number" className="form-control border border-success border-2" id="price" name='price' value={formData.price} onChange={handleInputChange} placeholder='In Rupees' />
    {validation.price && (<span className='text-danger'>{validation.price}</span>) }
  </div>

  <div className="mb-3">
    <label for="bedroom" className="form-label"><p className='text-dark font-monospace'> Bedroom <span className='text-danger'>*</span></p></label>
    <input type="number" className="form-control border border-success border-2" id="bedroom"  name='bedroom' value={formData.bedroom} onChange={handleInputChange} />
    {validation.bedroom && (<span className='text-danger'>{validation.bedroom}</span>) }
  </div>

  <div className="mb-3">
    <label for="bathroom" className="form-label"><p className='text-dark font-monospace'> Bathroom <span className='text-danger'>*</span></p></label>
    <input type="number" className="form-control border border-success border-2" id="bathroom" name='baths' value={formData.baths} onChange={handleInputChange} />
    {validation.baths && (<span className='text-danger'>{validation.baths}</span>) }
  </div>
  </div>
  </div>

<div className='d-flex justify-content-around '>
  <div className='mb-2 font-monospace'>
  <label htmlFor="categorySelect">Choose a Category <span className='text-danger'>*</span></label><br/>
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
  <label htmlFor="districtSelect" >Choose a district <span className='text-danger'>*</span></label><br/>
        <select className='form-select border border-success border-2 bg-light'
          id="districtSelect" name='district' value={formData.district} onChange={handleInputChange}  >
          <option value="">Select District</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Rupandehi">Rupandehi</option>
        </select>
        {validation.district && (<span className='text-danger'>{validation.district}</span>) }
    </div>

    <div className='mb-2 font-monospace ' >
  <label htmlFor="photoInput">Choose a photo <span className='text-danger'>*</span></label>
    <input className='form-select border border-success border-2 bg-light'
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
</div>

<div className='mb-2 font-monospace' >
  <label htmlFor="locationInput">Allow location <span className='text-danger'>*</span></label><br/>
<i  id='locationInput' class="bi bi-compass btn btn-light border border-success border-2" onClick={handleLocationClick} ></i>
{validation.latitude && (<span className='text-danger'>{validation.latitude}</span>) }
</div>
</div>

  <button type="submit" className="btn btn-success mt-3 font-monospace align-self-center">Submit</button>

</form>
</div>
    </div>
  )
}
