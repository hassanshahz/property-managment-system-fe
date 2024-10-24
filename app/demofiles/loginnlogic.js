// LoginPage.js
import React, { useState } from 'react';
import AgencyForm from './AgencyForm';
import UserForm from './UserForm';
import AgentForm from './AgentForm';

const LoginPage = () => {
  const [selectedForm, setSelectedForm] = useState('agency'); // Default to agency form
  const [error, setError] = useState('');

  const handleLogin = async (formType, data) => {
    setError('');
    let url = '';
    
    switch (formType) {
      case 'agency':
        url = 'http://localhost:8080/api/agency/login';
        break;
      case 'user':
        url = 'http://localhost:8080/api/user/login';
        break;
      case 'agent':
        url = 'http://localhost:8080/api/agent/login';
        break;
      default:
        break;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.message || 'Login failed');
      } else {
        const result = await response.json();
        localStorage.setItem('token', result.token); // Store token
        // Redirect or perform other actions
      }
    } catch (error) {
      setError('An error occurred while trying to log in');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setSelectedForm('agency')} className="btn">Agency</button>
        <button onClick={() => setSelectedForm('user')} className="btn">User</button>
        <button onClick={() => setSelectedForm('agent')} className="btn">Agent</button>
      </div>

      {selectedForm === 'agency' && <AgencyForm onSubmit={(e) => { e.preventDefault(); handleLogin('agency', { email: e.target.agencyEmail.value, password: e.target.agencyPassword.value }); }} error={error} />}
      {selectedForm === 'user' && <UserForm onSubmit={(e) => { e.preventDefault(); handleLogin('user', { email: e.target.userEmail.value, password: e.target.userPassword.value }); }} error={error} />}
      {selectedForm === 'agent' && <AgentForm onSubmit={(e) => { e.preventDefault(); handleLogin('agent', { email: e.target.agentEmail.value, password: e.target.agentPassword.value }); }} error={error} />}
    </div>
  );
};

export default LoginPage;
