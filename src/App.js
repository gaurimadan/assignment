import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import NewTicket from './components/NewTicket';
import MyTickets from './components/MyTicket';
import Performance from './components/Performance';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignUp';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    if (authState === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);
  };
  const handleSignin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route 
          path="/" 
          element={
            !isAuthenticated ? (
              <LoginPage onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />
          <Route 
          path="/signup" 
          element={
            !isAuthenticated ? (
              <SignPage onSignUp={handleSignin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/new-ticket" 
          element={
            isAuthenticated ? (
              <NewTicket onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/my-tickets" 
          element={
            isAuthenticated ? (
              <MyTickets onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/performance" 
          element={
            isAuthenticated ? (
              <Performance onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </div>
  );
};

export default App;

