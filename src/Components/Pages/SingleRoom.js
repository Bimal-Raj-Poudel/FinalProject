import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import axios from 'axios';

export default function SingleRoom() {

  const [singelRoom, setSingleRoom] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/home/category/1`)
    .then(res => setSingleRoom(res.data))
    .catch(error => console.log("Error occured while loading Single Homes :", error.message))
  })

  return (
    <div className='mt-3'>
      <Properties property={singelRoom}/>
    </div>
  );
}
