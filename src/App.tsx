import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import DashboardProvider from './context/dashboardProvider';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <Header />
        <Outlet />
      </DashboardProvider>
    </div>
  );
}

export default App;
