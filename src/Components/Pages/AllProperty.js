import React, { useEffect, useState } from 'react'
import Properties from './Properties'
import Pagination from '../Admin/Pagination'
import axios from 'axios';


export default function AllProperty() {

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [rentStatus, setRentStatus] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [search, setSearch] = useState('');
  const [property, setProperty] = useState([]);
  const [updatedHome, setUpdatedHome] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedHome.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(updatedHome.length / itemsPerPage); 

  const fetchData = () => {
    try {
       axios.get('http://localhost:8080/api/home/')
       .then(res => {
        setProperty(res.data);
        setUpdatedHome(res.data);
      })
       .catch(error => console.log("Error fetching list of houses :", error.message))

    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  useEffect(() => {
   
    fetchData();
   
  },[])

  const handlePageChange = (pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  //filter based on keyword
  useEffect(() => {
    const filteredHome = property.filter(home => (home.title).toLowerCase().includes(search.toLowerCase()));
    setUpdatedHome(filteredHome);
  },[search])

  //filter based on district 
 useEffect(() => {
  const filteredHome = property.filter(home => (home.district)===(selectedDistrict));
  setUpdatedHome(filteredHome);
 },[selectedDistrict])

 //filter based on rental status
 useEffect(() => {
  const filteredHome = property.filter(home => home.rented === rentStatus);
  console.log("Rental status :",filteredHome);
  // setUpdatedHome(filteredHome);
 },[rentStatus])

 //filter based on price range
useEffect(() => {
  const filteredHome = selectedPriceRange
        ? property.filter(property => {
            const [min, max] = getPriceRange(selectedPriceRange);
            return property.price >= min && property.price <= max;
          })
        : property;
  console.log("Price Range :", filteredHome)

},[selectedPriceRange])
 
const getPriceRange = value => {
  switch (value) {
    case '1':
      return [1000, 5000];
    case '2':
      return [5000, 10000];
    case '3':
      return [10000, Infinity];
    default:
      return [0, Infinity];
  }
};

  return (
    <>
      <div className='d-flex flex-column mt-2 position-relative '>

      <section className='container d-flex justify-content-between gap-3 m-2'>

      <select class="form-select" aria-label="Default select example" value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
      <option selected >Price Range</option>
      <option value="1">RS.1,000-5,000</option>
      <option value="2">RS.5,000-10,000</option>
      <option value="3">RS.10,000-above</option>
      </select>

       <select class="form-select" aria-label="Default select example" value={rentStatus} onChange={e => setRentStatus(e.target.value)}>
      <option selected >Status</option>
      <option value="true">Rented</option>
      <option value="false">Not Rented</option>
       </select>
       
       <select class="form-select" aria-label="Default select example" value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)}>
      <option selected>District</option>
      <option value="Kathmandu">Kathmandu</option>
      <option value="Pokhara">Pokhara</option>
      <option value="Rupandehi">Rupandehi</option>
       </select>

       <div className="input-group input-group-lg">
       <input type="text" class="form-control" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search With Keyword' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
       <span className="input-group-text" id="inputGroup-sizing-lg"><i class="bi bi-search"></i></span>
       </div>
      </section>

      <div className='mt-3'>
      <Properties property={currentItems}/>
     
      </div>
      <Pagination 
       currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} />

      </div>
    </>
  )
}
