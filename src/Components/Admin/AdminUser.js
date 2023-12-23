import React, { useContext, useEffect, useState } from 'react'
import './AdminUser.css'
import UserItem from './UserItem'
import axios from 'axios';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';

export default function AdminUser() {
const authUser =useContext(AuthContext);
const [search, setSearch] = useState('');
const [users, setUsers] = useState([]);
const [filterUsers, setFilterUsers] = useState([]);
const [reload, setReload] = useState(false);

//Get All the users
useEffect(() => {
    axios.get(`http://localhost:8080/api/person/`,{
      headers: {
        'Authorization': `Basic ${authUser.encodedCredentials}`
      }
    })
    .then(res => {
      console.log("Users :", res.data)
      setUsers(res.data);
      setFilterUsers(res.data);
    })
    .catch(err => console.log(err))
},[reload])

//Filter the user from keyword 
useEffect(() => {
const filteredUsers = users.filter(user => (user.name).toLowerCase().includes(search.toLowerCase()));
setFilterUsers(filteredUsers);

},[search])

//Handle Delete user
const handleDelete = async (id) =>{
     try{
      const response = await axios.delete(`http://localhost:8080/api/person/${id}`,{
        headers: {
          'Authorization': `Basic ${authUser.encodedCredentials}`
        }
      });
      if(response.status === 200){
        toast.warn("User deleted.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        })
        setReload(!reload);
      }
     } catch(err){
        console.log("Error deleting user :", err)
     }
}

  return (
    <>
    
      <div className='input-group d-flex justify-content-center align-items-center gap-0  rounded-3 sticky-top'>
      <div className='p-2'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> setSearch(e.target.value)} style={{width:"30em"}} />
        </div>
        </div>

        <ul>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            {filterUsers && filterUsers.map(user => (
                <li key={user.person_id} ><UserItem user={user} handleDelete={handleDelete}/></li>
            ))}
        </div>
        </ul>
     
    </>
  )
}
