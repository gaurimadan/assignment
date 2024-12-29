import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    
    setMessage('Password reset link has been sent to your email');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="w-96 p-8 bg-teal-200/80 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Forgot Password</h2>
          <p className="text-gray-600">
            Don't worry, Enter your email below and we will send you a link to change password.
          </p>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-white/80 rounded-md text-center text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Submit
          </button>

          <Link
            to="/"
            className="block w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center"
          >
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

