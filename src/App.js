import React, { useState } from 'react';
import axios from 'axios';

const UnderMaintenancePage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send-email', { email });
      setMessage('Email sent successfully');
      setEmail('');
    } catch (error) {
      setMessage('Error sending email. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Under Maintenance</h1>
        <p className="mb-4">We are currently performing maintenance. Please leave your email below to receive updates once the page is active.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
            {message && <p className="text-green-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UnderMaintenancePage;
