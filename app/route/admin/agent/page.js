'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AgentDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token')?.replace(/"/g, '');
      if (!token) {
        toast.error('You are not authorized. Please log in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/client/agent', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
      } catch (err) {
        setError('Error fetching agents');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto mt-20 py-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Agent Details
      </h1>

      {loading ? (
        <p className="text-center text-blue-600">Loading agents...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-500">No agents found</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border px-6 py-4 text-gray-900">{user.username}</td>
                <td className="border px-6 py-4 text-gray-900">{user.email}</td>
                <td className="border px-6 py-4 text-gray-900">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AgentDetails;
