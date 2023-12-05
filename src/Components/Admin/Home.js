import React, { useEffect, useState } from 'react'
import HomeItem from './HomeItem'
import Pagination from './Pagination'
import axios from 'axios'
import './Home.css'

export default function Home() {
const [home, setHome] = useState([]);
const [updatedHome, setUpdatedHome] = useState([]);
const [search, setSearch] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = updatedHome.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(updatedHome.length / itemsPerPage);

  useEffect(() => {
      axios.get('http://localhost:3031/homes')
     .then(res => {
      setHome(res.data);
      setUpdatedHome(res.data);
    })
     .catch(err => console.log(err))
  },[])

  useEffect(() => {
    const filteredHome = home.filter(home => (home.title).toLowerCase().includes(search.toLowerCase()));
    setUpdatedHome(filteredHome);
  },[search])

  const handleDelete = async (id) => {
    try{
      console.log(id)
        const response = await axios.delete(`http://localhost:3031/homes/${id}`);
        console.log(response.data);
    }
    catch(error){
      console.log(error.message);
    }
       
  }

  const handlePageChange = (pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  

  return (
    <>
    <div>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    </div><br/>
    <ul className='homeContainer'>
       {currentItems.map(value=>(
        <li key={value.id}><HomeItem homeItem={value} deleteHome={handleDelete}/></li>
       ))}
       </ul>

     <Pagination 
       currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} />
    </>
  )
}
