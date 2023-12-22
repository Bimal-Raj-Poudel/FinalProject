import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignIn({setAuthUser}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit =  async (e) =>{
        e.preventDefault();
        try{

          const encodedCredentials = btoa(`${email}:${password}`)
         
            const response = await axios.get(`http://localhost:8080/api/person/email/${email}`,{
               withCredentials:true,
              headers: {
                Authorization: `Basic ${encodedCredentials}`
              }
            })

           if(response.status === 200){
            const user = {
            person_id: response.data.person_id, 
            name: response.data.name, 
            email: response.data.email, 
            password: response.data.password, 
            phone: response.data.phone,
            address: response.data.address,
            isAuthenticated: true,
            encodedCredentials:encodedCredentials
            }
            setAuthUser(user);
            document.cookie = `AuthCredentials=${encodedCredentials}; HttpOnly; SameSite=Strict`;
             //Toastify
         toast.success("Logged in successfully.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        });
        navigate('/');
           }
           
          // Authorization: `Basic ${credentials}`
           // Set the token in a secure-->Cookies only sent over HTTPs request, 
           //HttpOnly--> prevent client side scripts from accessing the cookie
           //Max-Age=3600;
         
        

         
        }catch(error){
          console.log("Error Occured :",error.message);

          if (error.response && error.response.status === 401) {
            // Handle unauthorized access here (e.g., display an error message)
            setError("Invalid Username or Password.")
            console.log('Unauthorized access. Display a custom login form or message.');
          } else {
            // Handle other errors
            console.error('Error occurred:', error.message);
          }
        }
      
        setEmail('');
        setPassword('');
        
  }

  return (
    <>
    <section class="vh-100 gradient-custom mt-0">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-success text-dark" style={{borderRadius: '1rem'}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <form onSubmit={handleLoginSubmit}>
              <h2 class="fw-bolder mb-2 text-uppercase">Login</h2>
              <p class="text-dark fw-bolder mb-5">Please enter your Email and password !</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg " placeholder='Enter Email' value={email} onChange={e =>setEmail(e.target.value) } required/>
                {/* <p className='text-dark mt-1'>{" Email Error"}</p> */}
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg " placeholder='Enter Password' value={password} onChange={e =>setPassword(e.target.value) } required/>
                {/* <label class="form-label mt-1" for="typePasswordX">Password</label> */}
              </div>

              <div className='text-warning mb-3'>
                {error}
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>

              <div class="d-flex justify-content-center text-center mt-4 mb-2 pt-1">
                <a href="#" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

              

              <p class="mb-0">Don't have an account? <Link to="/register" className='text-white-50 fw-bold'>Register</Link>
              </p>
              </form>
            </div>

            <div>
              
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

