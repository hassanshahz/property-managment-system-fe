"use client";

import React, { useState } from 'react';
import axios from 'axios';

const CreateMeeting = () => {
  const [property, setProperty] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [agentEmail, setAgentEmail] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/meetings',
        { property, userEmail, agentEmail, meetingTime },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Meeting created:', response.data);
    // Check if response is 204 and handle it
    if (response.status === 204) {
      console.log('No content, but request was successful');
    } else {
      console.log('Meeting created:', response.data);
    }
  } catch (error) {
    console.error('Error creating meeting:', error.response?.data || error.message);
  }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mt-20">
        <h2 className="text-2xl font-semibold text-center mb-6">Schedule a Meeting</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Property</label>
            <input
              type="text"
              placeholder="Property"
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              placeholder="User Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Email</label>
            <input
              type="email"
              placeholder="Agent Email"
              value={agentEmail}
              onChange={(e) => setAgentEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Meeting Time</label>
            <input
              type="datetime-local"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Create Meeting
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMeeting;

