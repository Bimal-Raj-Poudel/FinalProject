import React from 'react';

function SignIn() {
  return (
    <>
        <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
       <div className='40-w p-5 rounded'>
           <form >
        <h2>Sign In </h2>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email"  placeholder='Type your Email ' className='form-control'/>

          </div>

          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password"  placeholder='Enter Password ' className='form-control'/>

          </div>
          <div className='mb-2'>
            <input type="checbox" className='custom-control custom-checkbox' id='check' />
            <label htmlFor="check" className='custom-input-label'>Remember Me </label>
          </div>

          <div className='d-grid'>
            <button className="btn btn-primary">Sign In </button>

          </div>

           </form>
        </div>
        </div>
       
    </>
  );
}

export default SignIn;
