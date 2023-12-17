import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import axios from 'axios';

const OfficeSpace = () => {

  const [officeSpace, setOfficeSpace] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/home/category/5`)
    .then(res => setOfficeSpace(res.data))
    .catch(error => console.log("Error occured while loading Flat :", error.message))
  })


  return (
    <>
    <div className='mt-3'>
      <Properties property={officeSpace} />
      </div>
    </>
  );
}

export default OfficeSpace;
