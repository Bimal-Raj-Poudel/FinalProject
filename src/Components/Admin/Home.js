import React, { useEffect, useState } from 'react'
import HomeItem from './HomeItem'
import axios from 'axios'

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
       {home.map(value=>(
        <li key={value.home_id}><HomeItem homeItem={value} deleteHome={handleDelete}/></li>
       ))}
    </>
  )
}
