import React, { useContext, useEffect, useState } from 'react'
import HomeItem from './HomeItem'
import Pagination from './Pagination'
import axios from 'axios'
import './Home.css'
import { AuthContext } from '../../App'
import { toast } from 'react-toastify'

export default function Home() {
const authUser =useContext(AuthContext);
const [home, setHome] = useState([]);
const [updatedHome, setUpdatedHome] = useState([]);
const [search, setSearch] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [reload, setReload] = useState(false);
const itemsPerPage = 8;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = updatedHome.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(updatedHome.length / itemsPerPage);

//List all the Home items
  useEffect(() => {
      axios.get('http://localhost:8080/api/home/',{
        headers: {
          'Authorization': `Basic ${authUser.encodedCredentials}`
        }
      })
     .then(res => {
      setHome(res.data);
      setUpdatedHome(res.data);
    })
     .catch(err => console.log(err))
  },[reload])

  useEffect(() => {
    const filteredHome = home.filter(home => (home.title).toLowerCase().includes(search.toLowerCase()));
    setUpdatedHome(filteredHome);
  },[search])

  //Handle Delete Property
  const handleDelete = async (id) => {
    console.log("Home Id :", id)
    try{
        const response = await axios.delete(`http://localhost:8080/api/home/${id}/person/${authUser.person_id}`,{
          headers: {
            'Authorization': `Basic ${authUser.encodedCredentials}`
          }
        });
        
        if(response.status == 200){
          setReload(!reload);
          toast.success("Property deleted successfully.",{
            position: "bottom-center",
            autoClose: 2000,
            theme: "colored"
          })
        }
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

     <div className=' fixed-bottom mb-2'>
     <Pagination 
       currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} />
       </div>
    </>
  )
}
