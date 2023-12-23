import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import axios from 'axios';

const House = () => {

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/home/category/3`)
    .then(res => setHome(res.data))
    .catch(error => console.log("Error occured while loading Homes :", error.message))
  })

  return (
    <> 
    <div className='mt-3'>
     <Properties property={home}/>
     </div>
    </>
  );
}

export default House;
