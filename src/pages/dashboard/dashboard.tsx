import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../../context/dashboardProvider';

function Dashboard() {
  const { isLoggedIn } = useContext(DashboardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      /* ToDo: Currently hardcoded. Change to guarded route. */
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <section>
      <h2>Fancy dashboard</h2>
      {isLoggedIn && (
        <p>
          Welcome to this awesome dashboard!
        </p>
      )}
    </section>
  );
}

export default Dashboard;
