import { useState } from 'react';
import { HomeIcon, FolderIcon, BarChart3, Menu, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Performance = ({onLogout}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const operationData = {
    contactNo: '0123456789',
    department: 'ABC',
    stats: {
      totalTickets: 5,
      solved: 2,
      pending: 1,
      inProgress: 2,
      rating: 4
    },
    operations: [
      { id: 1, name: 'Operation Name 1' },
      { id: 2, name: 'Operation Name 2' },
      { id: 3, name: 'Operation Name 3' }
    ]
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 md:w-4 md:h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
     
      <button 
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-teal-400 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6" />
      </button>
      
     
      <div className={`w-64 bg-gray-200 fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10`}>
        <div className="p-4 bg-teal-400 text-white">
          <h1 className="text-xl font-semibold">Helpdesk</h1>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link to="/my-tickets" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded">
            <FolderIcon className="w-5 h-5 mr-2" />
            My Tickets
          </Link>
          <Link to="/performance" className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded">
            <BarChart3 className="w-5 h-5 mr-2" />
            Performance
          </Link>
        </nav>
      </div>

      
      <div className="flex-1 bg-white">
        <Header onLogout={onLogout} />

        <div className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Performance</h2>

          <div className="space-y-4 md:space-y-6">
            
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-medium">Operation Name</h3>
                    <p className="text-sm text-gray-600">Contact No: {operationData.contactNo}</p>
                    <p className="text-sm text-gray-600">Department: {operationData.department}</p>
                  </div>
                </div>

                
                <div className="flex-1 w-full md:ml-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Ticket Handle</p>
                      <p className="font-bold">{operationData.stats.totalTickets}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Ticket Solved</p>
                      <p className="font-bold">{operationData.stats.solved}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Ticket Pending</p>
                      <p className="font-bold">{operationData.stats.pending}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Ticket in progress</p>
                      <p className="font-bold">{operationData.stats.inProgress}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Rating</p>
                    <StarRating rating={operationData.stats.rating} />
                  </div>
                </div>
              </div>
            </div>

           
            <div className="space-y-4">
              {operationData.operations.map((operation) => (
                <div key={operation.id} className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">{operation.name}</span>
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition-colors">
                    View details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;

