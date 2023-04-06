import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
// import Home from './pages/home';
import Navigation from './components/navigation';
import DashboardProvider from './context/dashboardProvider';

function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <header className="App-header">
          <Navigation />
        </header>

        <Outlet />
      </DashboardProvider>
    </div>
  );
}

export default App;
