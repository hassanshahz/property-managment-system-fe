'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const role = localStorage.getItem("role");
        if (!token) {
          toast.error("You are not authorized. Please log in.");
          return;
        }
      try {
        const response = await axios.get('http://localhost:8080/api/client', {
          headers: {
            Authorization: `Bearer ${token}`,
            role: `${role}`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
