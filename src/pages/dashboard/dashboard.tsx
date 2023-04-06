import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import { DashboardContext } from '../../context/dashboardProvider';

function Dashboard() {
  const { isLoggedIn } = useContext(DashboardContext);
  const savedItem = localStorage.getItem('username');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      /* ToDo: Currently hardcoded. Change to guarded route */
      navigate('/login');
    }
  }, []);

  return (
    <section className="dashboard">
      <h2>Fancy dashboard</h2>
      {isLoggedIn
      && (
      <p>
        Welcome to this awesome dashboard!
      </p>
      )}
    </section>
  );
}

export default Dashboard;
