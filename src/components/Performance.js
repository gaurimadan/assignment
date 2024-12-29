import { HomeIcon,  FolderIcon, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Header from './Header';

const Performance = ({onLogout}) => {
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
            className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex">
     
      <div className="w-64 bg-gray-200">
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
        <div className="p-4 bg-teal-400 flex justify-end space-x-4">
          
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Performance</h2>

          <div className="space-y-6">
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-start gap-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-medium">Operation Name</h3>
                    <p className="text-sm text-gray-600">Contact No: {operationData.contactNo}</p>
                    <p className="text-sm text-gray-600">Department: {operationData.department}</p>
                  </div>
                </div>

               
                <div className="flex-1 ml-8">
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
                <div key={operation.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">{operation.name}</span>
                  </div>
                  <button className="px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition-colors">
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

