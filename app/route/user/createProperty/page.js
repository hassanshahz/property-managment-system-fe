'use client';
import { useState } from 'react';
import axios from 'axios';

const CreatePropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/property/register', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Property created successfully!');
      setFormData({
        title: '',
        description: '',
        price: '',
        location: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating property');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Create New Property</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter property title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter property description"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter property price"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter property location"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300"
        >
          Create Property
        </button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;
