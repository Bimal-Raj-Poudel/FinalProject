import React, { useEffect, useState } from 'react'
import './AdminUser.css'
import UserItem from './UserItem'
import axios from 'axios';

export default function AdminUser() {
const [search, setSearch] = useState('');
const [users, setUsers] = useState([]);
const [filterUsers, setFilterUsers] = useState([]);
const [reload, setReload] = useState(false);

//Get All the users
useEffect(() => {
    axios.get(`http://localhost:3032/users`)
    .then(res => {
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
      const response = await axios.delete(`http://localhost:3032/users/${id}`);
      setReload(!reload);
     }catch(err){
        console.log("Error deleting user :", err)
     }
}

  return (
    <div>
      <div><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/></div>
        <ul>
            {filterUsers.map(user => (
                <li key={user.id}><UserItem user={user} handleDelete={handleDelete}/></li>
            ))}
        </ul>
     
    </div>
  )
}
