import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import NewTicket from './components/NewTicket';
import MyTickets from './components/MyTicket';
import Performance from './components/Performance';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // For testing, set to true

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route 
          path="/" 
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/new-ticket" 
          element={isAuthenticated ? <NewTicket /> : <Navigate to="/" />} 
        />
        <Route 
          path="/my-tickets" 
          element={isAuthenticated ? <MyTickets /> : <Navigate to="/" />} 
        />
        <Route 
          path="/performance" 
          element={isAuthenticated ? <Performance /> : <Navigate to="/" />} 
        />
      </Routes>
    </div>
  );
};

export default App;

