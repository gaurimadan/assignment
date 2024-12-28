import { useState } from 'react';
import { HomeIcon, PlusCircleIcon, FolderIcon, Star, Search ,BarChart3} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyTickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesCount, setEntriesCount] = useState('10');

  const tickets = [
    {
      ticketNo: '1234',
      subject: 'Login issue',
      status: 'In Progress',
      supportBy: 'Tech support',
      date: '13/08/21',
      rating: 4
    },
    {
      ticketNo: '1124',
      subject: 'New ticket issue',
      status: 'On hold',
      supportBy: 'Operation Team',
      date: '14/08/21',
      rating: 3
    },
    {
      ticketNo: '1224',
      subject: 'New request',
      status: 'Closed',
      supportBy: 'Tech support',
      date: '13/08/21',
      rating: 5
    },
    {
      ticketNo: '1244',
      subject: 'Ticket submission',
      status: 'In Progress',
      supportBy: 'Operation Team',
      date: '14/08/21',
      rating: 4
    },
    {
      ticketNo: '1114',
      subject: 'Login issue',
      status: 'In Progress',
      supportBy: 'Tech support',
      date: '3/08/21',
      rating: 4
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-green-400';
      case 'On hold':
        return 'bg-blue-500';
      case 'Closed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-200';
    }
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
      {/* Sidebar */}
      <div className="w-64 bg-gray-200">
        <div className="p-4 bg-teal-400 text-white">
          <h1 className="text-xl font-semibold">Helpdesk</h1>
        </div>
        <nav className="p-4 space-y-2">
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
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="p-4 bg-teal-400 flex justify-end space-x-4">
          {/* Header icons placeholder */}
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
          <div className="w-6 h-6 bg-white/20 rounded"></div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">List of Ticket</h2>
          
          {/* Search and Entries Section */}
          <div className="flex justify-between mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find ticket"
                className="pl-10 pr-4 py-2 border rounded-md bg-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span>Show:</span>
              <select
                className="border rounded-md py-2 px-3 bg-gray-100"
                value={entriesCount}
                onChange={(e) => setEntriesCount(e.target.value)}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span>Entries</span>
            </div>
          </div>

          {/* Tickets Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Ticket No.</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Support by</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.ticketNo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-blue-600">{ticket.ticketNo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{ticket.subject}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{ticket.supportBy}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{ticket.date}</td>
                    <td className="px-6 py-4">
                      <StarRating rating={ticket.rating} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              Showing 1 to 5 of 5 entries
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-md bg-gray-100 text-gray-600">&lt;</button>
              <button className="px-3 py-1 border rounded-md bg-gray-800 text-white">1</button>
              <button className="px-3 py-1 border rounded-md bg-gray-100 text-gray-600">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;

