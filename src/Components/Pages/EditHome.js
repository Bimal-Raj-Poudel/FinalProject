import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EditHome() {

  const { id } = useParams();
  const navigate = useNavigate();
  const authUser =useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amenities: '',
    city: '',
    district: '',
    price: 0,
    rented:false
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/home/${id}`,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })
    .then(response => {
      setFormData(prevFormData => ({ ...prevFormData, ...response.data}))
    })
    .catch(error => console.log("Error while loading Home by Id"))
  },[])

  const handleUpdate =  async (e) => {
    e.preventDefault();
    console.log("Update data :", formData)
    try{
      console.log("Person :",authUser.person_id," & Home Id :",id)
     const response = await axios.put(`http://localhost:8080/api/home/person/${authUser.person_id}/home/${id}`,formData ,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`,
        'Content-Type': 'application/json'
      }})
      if(response.status === 200){
        toast.success("Home Info updated Successfully !",{
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        })
        navigate('/dashboard');
      }
      else{
        console.log("Error response :", response.data)
      }
    } catch(error) {
      console.log("Error while Updation :",error.message);
    }

  }

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value},)
  }

  const handleCancel = () => {
    navigate('/dashboard')
  }


  return (

    <div className='container mt-2 d-flex flex-column font-monospace'><div>

    <h4>Edit Your Property Details.</h4>

<form >
  <div className="mb-3 mt-3">
    <label for="Title" className="form-label"><p className='text-dark font-monospace'>Title</p></label>
    <input type="email" className="form-control" name='title' id="Title" aria-describedby="emailHelp" value={formData.title} onChange={handleInputChange}  required />
  </div>

  <div className="mb-3">
    <label for="description" className="form-label"><p className='text-dark font-monospace'> Description </p></label>
    <input type="text" className="form-control" name='description' id="Description" value={formData.description} onChange={handleInputChange}  required/>
  </div>

  <div className="mb-3">
    <label for="Password" className="form-label"><p className='text-dark font-monospace'> Amenities </p></label>
    <input type="text" className="form-control" name='amenities' id="Password" value={formData.amenities} onChange={handleInputChange} required/>
  </div>


<div className='d-flex justify-content-around mb-3'>

<div className=" align-self-center">
    <label for="Password" className="form-label"><span className='text-dark font-monospace'> Rent Price </span></label>
    <input type="text" className="form-control" name='price' id="Password" placeholder='In RS.' value={formData.price} onChange={handleInputChange} required/>
  </div>

<select class="form-select font-monospace align-self-center" aria-label="Default select example" name='rented'
value={formData.rented ? '1':'0'}
onChange={e => setFormData({...formData, rented : e.target.value === "1"? true : false})} 
style={{width:'10rem', height:'3rem'}} >
  <option selected>Rent Status </option>
  <option value="1">Rented</option>
  <option value="0">Not Rented</option>
</select>
  
 
</div>

<div className='d-flex justify-content-center gap-3'>
  <button type="submit" className="btn btn-success mt-3 font-monospace" onClick={handleUpdate}>Submit</button>
  <button type="button" className="btn btn-danger mt-3 font-monospace" onClick={handleCancel}>Cancel</button>
  </div>

</form>
</div>
    </div>
  )
}
