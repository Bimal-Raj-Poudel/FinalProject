
import React, { useState } from 'react';

export default function Register() {

        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData(
            {
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(formData);
        };

  return (
    <>
     <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
       <div className='40-w p-5 rounded'>
           <form onSubmit={handleSubmit}>
        <h2>Sign In </h2>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Type your Email ' className='form-control'/>

          </div>

          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Enter Password ' className='form-control'/>

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


// import React from 'react';
// import { useState } from 'react';

// export default function Register() {

//         const [formData, setFormData] = useState({
//           username: '',
//           email: '',
//           password: '',
//         });
      
//         const handleInputChange = (e) => {
//           const { name, value } = e.target;
//           setFormData(
//             {//Object destructuring
//             ...formData,
//             [name]: value,
//           });
//         };
      
//         const handleSubmit = (e) => {
//           e.preventDefault();
//           console.log(formData);
//         };

//   return (
//     <>
//      <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
//        <div className='40-w p-5 rounded'>
//            <form >
//         <h2>Sign In </h2>
//           <div className='mb-2'>
//             <label htmlFor="email">Email</label>
//             <input type="email"  placeholder='Type your Email ' className='form-control'/>

//           </div>

//           <div className='mb-2'>
//             <label htmlFor="password">Password</label>
//             <input type="password"  placeholder='Enter Password ' className='form-control'/>

//           </div>
//           <div className='mb-2'>
//             <input type="checbox" className='custom-control custom-checkbox' id='check' />
//             <label htmlFor="check" className='custom-input-label'>Remember Me </label>
//           </div>

//           <div className='d-grid'>
//             <button className="btn btn-primary">Sign In </button>

//           </div>

//            </form>
//         </div>
//         </div>
// {/* //       <form className="container">
// //   <div className="mb-3 ">
// //     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
// //     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
// //     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //   </div>
// //   <div className="mb-3">
// //     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
// //     <input type="password" className="form-control" id="exampleInputPassword1"/>
// //   </div>
// //   <div className="mb-3 form-check">
// //     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
// //     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
// //   </div>
// //   <button type="submit" className="btn btn-primary">Submit</button>
// // </form> */}

//     </>
//   );
// }

