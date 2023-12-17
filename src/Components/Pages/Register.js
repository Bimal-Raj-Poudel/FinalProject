
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

        const navigate = useNavigate();
        const [error, setError] = useState({});

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          phone: '',
          address: ''
        });
      
        const handleInputChange = (e) => {
          setFormData(
            {
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = async(e) => {
          e.preventDefault();
          try{
            console.log(formData);
           const response = await axios.post('http://localhost:8080/api/person/create', formData);

           if (response.status === 201) {
            console.log('User registered successfully');
            navigate("/signIn");
          } 

          }catch(err){


           if(err.response && err.response.data){
            const { data } = err.response;
            setError(data)
            console.log(data.password);
           }
          
          
          }
          
        };

  return (
    <>
    <section class="vh-100 gradient-custom mt-1">
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-success text-dark-20" style={{borderRadius: '1rem'}}>
          <div class="card-body p-5 text-center">

            <div class="d-flex flex-column justify-content-center  gap-2">

              <h2 class="fw-bolder mb-2 text-uppercase">Register</h2>
              <p class="text-dark-10 mb-2">Please enter details carefully !!</p>

             <form onSubmit={handleSubmit}>

              <div class="form-outline form-white mb-2">
                <input type="text" id="typeNameX" name='name' 
                class="form-control form-control-lg" placeholder='Name'
                onChange={handleInputChange} value={formData.name}/>
                <label htmlFor='typeNameX'> 
                {error.name && error.name.length > 0 && (
                <div className="validation-errors text-danger">
                 {error.name.map((element, index) => (
                <span key={index} className="error-message">{element}</span> ))} </div>)}
                </label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="email" id="typeEmailX" name='email' 
                class="form-control form-control-lg" placeholder='Email'
                onChange={handleInputChange} value={formData.email}/>
                <label className='typeEmailX'>
                    {error.email && (<div className='text-danger'>{error.email}</div>)}
                </label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="number" id="typeNumberdX" name='phone' 
                class="form-control form-control-lg" placeholder='Phone Number'
                onChange={handleInputChange} value={formData.phone}/>
                <label className='typeNumberdX'>
                    {error.phone && (<div className='text-danger'>{error.phone}</div>)}
                </label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="text" id="typeAddressdX" name='address' 
                class="form-control form-control-lg" placeholder='Address'
                onChange={handleInputChange} value={formData.address}/>
                <label htmlFor='typeAddressdX'>
                   {error.address && (<div className='text-danger'>{error.address}</div>)}
                </label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="password" id="typePasswordX" name='password' 
                class="form-control form-control-lg" placeholder='Password'
                onChange={handleInputChange} value={formData.password}/>
                <label htmlFor='typePasswordX'> 
                {error.password && error.password.length > 0 && (
                <div className="validation-errors text-danger">
                 {error.password.map((element, index) => (
                <span key={index} className="error-message">{element}</span> ))} </div>)}
                </label>
              </div>

              <button class="btn btn-outline-light btn-lg align-self-center" 
              style={{width:"10rem"}} type="submit">Register</button>

              </form>

              <p class="mb-0">Do you already have an account? <Link to="/signIn" className='text-white-50 fw-bold'>Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
}

