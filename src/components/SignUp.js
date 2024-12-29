import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignPage = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-400">
      <div className="w-150 p-8 bg-teal-200 rounded-lg shadow-lg">
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
             <input
              type="email"
              placeholder="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center space-x-4">
          <Link to="/forgot-password" className="text-red-500 text-sm">Forgot password?</Link>
          <Link to="/" className="text-blue-500 text-sm">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignPage;