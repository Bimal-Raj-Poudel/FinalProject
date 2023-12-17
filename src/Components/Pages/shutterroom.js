import axios from 'axios';
import Properties from './Properties';
import React, { useEffect, useState } from 'react'

export default function ShutterRoom() {

  const [shutterRoom, setShutterRoom] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/home/category/2`)
    .then(res => setShutterRoom(res.data))
    .catch(error => console.log("Error occured while loading Shutter Room :", error.message))
  })

  return (
    <div className='mt-3'>
      <Properties property={shutterRoom} />
    </div>
  )
}
