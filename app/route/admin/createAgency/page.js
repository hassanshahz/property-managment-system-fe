'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAgency = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data) => {
    setError('');

    // API Fetch POST
    try {
      const response = await fetch('http://localhost:8080/api/agency/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Agency created successfully!', {
          position: 'top-right',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.push('/route/admin/home'); // Redirect to admin home page or desired route
        }, 1000);
      } else {
        const result = await response.json();
        setError(result.message || 'Agency creation failed');
        toast.error(result.message || 'Agency creation failed');
      }
    } catch (error) {
      setError('An error occurred while trying to create the agency');
      toast.error('An error occurred while trying to create the agency');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-20">
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} />
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Agency</h1>

        {/* Agency Creation Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Agency Name
            </label>
            <input
              {...register('name', { required: 'Agency name is required' })}
              id="name"
              type="text"
              placeholder="Agency Name"
              className="mt-1 p-2 border rounded w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Agency Email
            </label>
            <input
              {...register('email', { required: 'Agency email is required' })}
              id="email"
              type="email"
              placeholder="Agency Email"
              className="mt-1 p-2 border rounded w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Agency Phone
            </label>
            <input
              {...register('phone', { required: 'Agency phone number is required' })}
              id="phone"
              type="tel"
              placeholder="Agency Phone Number"
              className="mt-1 p-2 border rounded w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Agency Address
            </label>
            <input
              {...register('address', { required: 'Agency address is required' })}
              id="address"
              type="text"
              placeholder="Agency Address"
              className="mt-1 p-2 border rounded w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register('password', { required: 'Password is required' })}
              id="password"
              type="password"
              placeholder="Agency Password"
              className="mt-1 p-2 border rounded w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <Button className="w-full mt-4" type="submit">
            Create Agency
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateAgency;
