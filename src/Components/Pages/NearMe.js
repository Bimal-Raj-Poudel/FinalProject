import React, { useEffect, useState } from 'react'
import Pagination from '../Admin/Pagination';
import Properties from './Properties';
import axios from 'axios';
import Spinner from './Spinner';

export default function NearMe() {
    // const [location, setLocation] = useState(null);
    const [nearHome, setNearHome] = useState([]);
    const [updatedHome, setUpdatedHome] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const itemsPerPage = 9;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = updatedHome.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(updatedHome.length / itemsPerPage); 

    const fetchData = ({ latitude, longitude }) => {
      axios.get(`http://localhost:8080/api/home/filter/location?latitude=${latitude}&longitude=${longitude}`)
      .then(res => {
        setNearHome(res.data)
        setUpdatedHome(res.data)
        setLoading(false);
      })
      .catch(error => console.log("Error occured whille fetching near home :",error.message));
    }

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // const { latitude, longitude } = position.coords;
            // setLocation({ latitude, longitude });
            fetchData(position.coords);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    }, []);

    const handlePageChange = (pageNumber)=>{
      setCurrentPage(pageNumber);
    }

  return (
    <div className='mt-5'>
      {loading && <Spinner />}
      <Properties property={currentItems}/>
      {!loading &&
      <Pagination 
       currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} /> }
    </div>
  )
}
