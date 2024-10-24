'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/property/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProperties(response.data);
      } catch (error) {
        setError('Error fetching properties');
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Property Dashboard</h1>

      {/* Loading State */}
      {loading && <p>Loading properties...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Properties Display */}
      {properties.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property._id} className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <p>Location: {property.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserHome;
