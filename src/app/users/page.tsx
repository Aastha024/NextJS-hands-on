'use client';
import React, { useEffect, useState } from 'react'

interface Usersobj {
    id: string; 
    name: string;
}

interface Users {
    users: Usersobj[];
}

const Users = () => {
    const [users, setUsers] = useState<Users>({ users: []})
 
    useEffect(() => {
      async function fetchPosts() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      }
      fetchPosts()
    }, [])
   
    if (!users) return <div>Loading...</div>
  return (
    <div>
{
    users.users.map((user, index) => (
        <div key={index} className='flex items-center gap-2'>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    ))
}
    </div>
  )
}

export default Users