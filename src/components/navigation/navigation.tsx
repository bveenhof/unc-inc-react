import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';
import { DashboardContext } from '../../context/dashboardProvider';

function Navigation() {
  const savedItem = localStorage.getItem('username');
  const { setIsLoggedIn, isLoggedIn } = useContext(DashboardContext);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn && setIsLoggedIn(false);
  };
  return (
    <div className="navigation">
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      {savedItem || isLoggedIn ? <button type="button" onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
    </div>
  );
}

export default Navigation;
