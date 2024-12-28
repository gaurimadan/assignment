// src/components/LoginPage.js
import { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Helpdesk System</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center space-x-4">
          <a href="#" className="text-red-500 text-sm">Forgot password?</a>
          <a href="#" className="text-blue-500 text-sm">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;