import React, { useState } from 'react'
import './AdminUser.css'
import User from './User'

export default function AdminUser() {

const [users, setUsers] = useState([{"id":1,"name":"Aashis"},{"id":2,"name":"pandey"}]);

  return (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id}><User user={user}/></li>
            ))}
        </ul>
     
    </div>
  )
}
