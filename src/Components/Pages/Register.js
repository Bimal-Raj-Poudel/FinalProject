
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

        // const [formData, setFormData] = useState({
        //   username: '',
        //   email: '',
        //   password: '',
        // });
      
        // const handleInputChange = (e) => {
        //   const { name, value } = e.target;
        //   setFormData(
        //     {
        //     ...formData,
        //     [name]: value,
        //   });
        // };
      
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   console.log(formData);
        // };

  return (
    <>
    <section class="vh-100 gradient-custom mt-1">
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-success text-dark-20" style={{borderRadius: '1rem'}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-2 mt-md-4 pb-5">

              <h2 class="fw-bolder mb-2 text-uppercase">Register</h2>
              <p class="text-dark-10 mb-2">Please enter details carefully !!</p>

              <div class="form-outline form-white mb-2">
                <input type="text" id="typeNameX" class="form-control form-control-lg" />
                <label class="form-label" for="typeNameX">Name</label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="number" id="typeNumberdX" class="form-control form-control-lg" />
                <label class="form-label" for="typeNumberdX">Phone No</label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="password" id="typeAddressdX" class="form-control form-control-lg" />
                <label class="form-label" for="typeAddressdX">Address</label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <button class="btn btn-outline-light btn-lg mb-2 px-5" type="submit">Register</button>
              <p class="mb-0">Do you already have an account? <Link to="/signIn" className='text-white-50 fw-bold'>Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     {/* <div className='d-flex justify-content-center align-items-center '>
       <div className='40-w p-5 rounded'>
           <form onSubmit={handleSubmit}>

        <h2>Registeration </h2>

        <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input type="text"  placeholder='Enter your Name ' className='form-control'required/>
          </div>

          
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Enter Password ' className='form-control'required/>
          </div>
             
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Type your Email ' className='form-control' required/>
          </div>

          <div className='mb-2'>
            <label htmlFor="name">Phone No</label>
            <input type="number"  placeholder='Enter your Phone Number ' className='form-control'required/>
          </div>

          <div className='mb-2'>
            <label htmlFor="name">Address</label>
            <input type="text"  placeholder='Enter your Address ' className='form-control' required/>
          </div>

          <div className='d-grid'>
            <button className="btn btn-primary">Sign In </button>
          </div>
          <Link to="/SignIn">Already have account ?</Link>
           </form>
        </div>
        </div> */}
    </>
  );
}

