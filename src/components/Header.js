import { Bell, Moon, User, LogOutIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/'); 
  };
 
  return (
    <div className="p-4 bg-teal-400 flex justify-end items-center space-x-4">
      <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <Bell className="w-5 h-5 text-white" />
      </button>
      <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <Moon className="w-5 h-5 text-white" />
      </button>
      <Link to="/profile" className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <User className="w-5 h-5 text-white" />
      </Link>
      <button 
        onClick={handleLogout}
        className="p-2 hover:bg-white/20 rounded-full transition-colors"
      >
        <LogOutIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Header;