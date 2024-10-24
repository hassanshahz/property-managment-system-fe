'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const AdminHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get('http://localhost:8080/api/property');
        setProperties(response.data);
      } catch (error) {
        setError('Error fetching properties');
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchProperties();
  }, []);

  // Function to navigate to the register property page
  const navigateToRegister = () => {
    router.push('/route/user/createProperty'); // Adjust this path to your register property route
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Property Dashboard</h1>

      {/* Button to navigate to register property page */}
      <button 
        onClick={navigateToRegister} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register New Property
      </button>

      {/* Loading State */}
      {loading && <p>Loading properties...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Properties Display in Table Format */}
      {properties.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Actions</th> {/* Optional Actions Column */}
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{property.title}</td>
                <td className="border border-gray-200 px-4 py-2">{property.description}</td>
                <td className="border border-gray-200 px-4 py-2">${property.price}</td>
                <td className="border border-gray-200 px-4 py-2">{property.location}</td>
                <td className="border border-gray-200 px-4 py-2">

                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminHome;
