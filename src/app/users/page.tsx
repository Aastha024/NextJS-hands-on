"use client";
import React, { useEffect, useState } from "react";

interface Usersobj {
  id: string;
  name: string;
}

interface Users {
  users: Usersobj[];
}

const Users = () => {
  const [users, setUsers] = useState<Users>();
  const [username, setUsername] = useState("");
  const [ email, setEmail] = useState("");
  const [ data, setData] = useState([]);
  console.log("🚀 ~ Users ~ data:", data, username)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email: email}),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      // setError(err.message);
      console.log(err);
      
    } finally {
      // setLoading(false);
    }
  };
  if (!users) return <div>Loading...</div>;
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="flex items-center gap-2">
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}

      <div>
       <div className="flex gap-4">
       <input
          type="text"
          placeholder="Name"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded-lg text-black"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-lg text-black"
        />
       </div>
        <button onClick={handleSubmit} className="px-5 py-2 mt-5 bg-slate-400 rounded-lg text-black">Save</button>
      </div>
    </div>
  );
};

export default Users;
