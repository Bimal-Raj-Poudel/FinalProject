import React, { useEffect, useState } from 'react'
import HomeItem from './HomeItem'
import axios from 'axios'
import './Home.css'

export default function Home() {

  
const [home, setHome] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3031/homes')
     .then(res => setHome(res.data))
     .catch(err => console.log(err))
  },[])

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
  

  return (
    <>
    <ul className='homeContainer'>
       {home.map(value=>(
        <li key={value.id}><HomeItem homeItem={value} deleteHome={handleDelete}/></li>
       ))}
       </ul>

      <nav aria-label="...">
    <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </>
  )
}
