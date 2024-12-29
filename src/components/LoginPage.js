import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-400 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-teal-200 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-800">
          Helpdesk System
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-base sm:text-lg"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center space-x-4">
          <Link to="/forgot-password" className="text-red-500 text-sm sm:text-base hover:underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-blue-500 text-sm sm:text-base hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

