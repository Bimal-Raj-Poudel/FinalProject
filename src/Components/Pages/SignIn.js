import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn({setAuthUser}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit =  (e) =>{
        e.preventDefault();
        try{
          const credentials = btoa(`${email}:${password}`)
          // Authorization: `Basic ${credentials}`
           // Set the token in a secure-->Cookies only sent over HTTPs request, 
           //HttpOnly--> prevent client side scripts from accessing the cookie
           //Max-Age=3600;
          document.cookie = `AuthCredentials=${credentials}; HttpOnly; SameSite=Strict`;
          const user = {
            name:"Aashis",
            email:email,
            password:password,
            isAuthenticated: true
      }
      setAuthUser(user);
          // console.log(credentials);
          navigate('/');

        }catch(err){
          console.log("Error Occured :",err.message);
          setError("Invalis credentials"); //Throw after failing login
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
              <p class="text-dark-10 mb-5">Please enter your Email and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" value={email} onChange={e =>setEmail(e.target.value) } required/>
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" value={password} onChange={e =>setPassword(e.target.value) } required/>
                <label class="form-label" for="typePasswordX">Password</label>
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

