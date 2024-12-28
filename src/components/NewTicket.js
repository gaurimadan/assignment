// src/components/NewTicket.js
import { useState } from 'react';
import { HomeIcon, PlusCircleIcon, FolderIcon, BarChart3} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NewTicket = ({onLogout}) => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    date: '',
    name: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 ">
        <div className="p-4 bg-teal-400 text-white ">
        <h1 className="text-xl font-semibold">Helpdesk</h1>
        </div>
        <nav className="p-4 space-y-2">
          <div className="space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link to="/new-ticket" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            New Ticket
          </Link>
          <Link to="/my-tickets" className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded">
            <FolderIcon className="w-5 h-5 mr-2" />
            My Tickets
          </Link>
          <Link to="/performance" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <BarChart3 className="w-5 h-5 mr-2" />
            Performance
          </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
      <Header onLogout={onLogout} />
        <h2 className="text-2xl font-semibold mb-6">Create New Ticket</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ticket No.</label>
              <input
                type="text"
                name="ticketNo"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                readOnly
                value={formData.ticketNo}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.department}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="mt-1 p-2 w-full border rounded-md bg-gray-200"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="">Select Category</option>
                <option value="technical">Technical</option>
                <option value="billing">Billing</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                name="type"
                className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                onChange={handleChange}
                value={formData.type}
              >
                <option value="">Select Type</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              className="mt-1 p-2 w-full border rounded-md bg-gray-200"
              onChange={handleChange}
              value={formData.priority}
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md bg-gray-200"
              onChange={handleChange}
              value={formData.description}
            />
          </div>

          {/* Placeholder for reCAPTCHA */}
          <div className="my-4">
            <div className="bg-gray-200 p-4 w-72 rounded">reCAPTCHA</div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;