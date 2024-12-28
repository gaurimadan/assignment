import { HomeIcon, PlusCircleIcon, FolderIcon, BarChart3} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Dashboard = ({onLogout}) => {
  const tickets = {
    total: 12,
    solved: 8,
    needApproval: 2,
    inProgress: 2
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200">
        <div className="p-4 bg-teal-400 text-white">
          <h1 className="text-xl font-semibold">Helpdesk</h1>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded">
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link to="/new-ticket" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            New Ticket
          </Link>
          <Link to="/my-tickets" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <FolderIcon className="w-5 h-5 mr-2" />
            My Tickets
          </Link>
          <Link to="/performance" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <BarChart3 className="w-5 h-5 mr-2" />
            Performance
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
       <Header onLogout={onLogout} />
        <div className="p-4 bg-teal-400 flex justify-end space-x-4">
          {/* Header icons placeholder */}
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-blue-400 text-white shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium mb-4">Total Tickets</h3>
              <p className="text-5xl font-bold">{tickets.total}</p>
            </div>
            <div className="p-6 rounded-lg bg-green-400 text-white shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium mb-4">Total Solved</h3>
              <p className="text-5xl font-bold">{tickets.solved}</p>
            </div>
            <div className="p-6 rounded-lg bg-red-400 text-white shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium mb-4">Need Approval</h3>
              <p className="text-5xl font-bold">{tickets.needApproval}</p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-400 text-white shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium mb-4">Task in Progress</h3>
              <p className="text-5xl font-bold">{tickets.inProgress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

