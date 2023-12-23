import React, { useContext, useState } from 'react'
import './DashBoard.css'
import axios from 'axios';
import { AuthContext } from '../../App';

export default function DashBoard() {

  const authUser =useContext(AuthContext);

  const [countUser, setCountUser] = useState(0);
  const [countHome, setCountHome] = useState('');

  
  useState(() => {
  axios.get(`http://localhost:8080/api/person/count`,{
    headers: {
      'Authorization': `Basic ${authUser.encodedCredentials}`
    }
  })
  .then(res => setCountUser(res.data.users))
  .catch(error => console.log("Error while Loading Users Count :",error.message))
  },[])

  return (
    <div className='Dashboard-Container'>
      <div className='flexBox'><i className="fas fa-users mr-3"></i> Users<br/><br/>
      <p>Total users are :</p><strong>{countUser}</strong>
      </div>
      <div className='flexBox'><i className="fas fa-home mr-3"></i> Homes<br/><br/>
         <p>Total homes are :</p><strong>150</strong>
      </div>
    </div>
  )
}
